import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

export default function SendMessage(): ReactElement {
  // COMPONENT STATE
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ status, setStatus ] = useState('');

  // BUILT-IN HOOKS
  useEffect(() => {
    let timeoutId: any;
    if (status) {
      timeoutId = setTimeout((): void => {
        setStatus('');
      }, 10000);
    }
    return () => clearTimeout(timeoutId);
  }, [status]);


  // HANDLER FUNCTIONS
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = { name, email, subject, message };

    try {
      const response: Response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: any = await response.json();

      // RESET FORM FIELDS
      if (response.ok) {
        setStatus('Message sent successfully');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        // HANDLE FAILURE RESPONSE
        setStatus(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message');
    }
  };

  const Separator = () => (
    <div className="border-t border-slate-500 w-full mx-auto mb-2"></div>
  );

  return (
    <form
      onSubmit={ handleSubmit }
      className={ 'flex flex-col bg-slate-500 bg-opacity-60 text-slate-100 rounded-xl p-3 max-w-screen-md mx-auto' }>

      {/* NAME SECTION */ }
      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='text'
        placeholder='Name'
        value={ name }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) }
        required
      />

      <Separator />

      {/* EMAIL SECTION */ }
      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='email'
        placeholder='Email'
        value={ email }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
        required
      />

      <Separator />

      {/* SUBJECT SECTION */ }
      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='text'
        placeholder='Subject'
        value={ subject }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value) }
        required
      />

      <Separator />

      {/* MESSAGE SECTION */ }
      <textarea
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        placeholder='Message'
        value={ message }
        onChange={ (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value) }
        required
      />

      {/* SEND MESSAGE BUTTON */ }
      <button
        className='text-slate-100 bg-slate-500 h-9 rounded-xl w-fit mx-auto px-4 hover:bg-slate-400 focus:bg-slate-300 hover:text-slate-700 transition duration-300'
        type='submit'>
        Send Message
      </button>

      { status && <div className={ 'mx-auto mt-3' }>{ status }</div> }

    </form>
  )
}