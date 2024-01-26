import { ChangeEvent, HTMLInputTypeAttribute, ReactElement, useState } from 'react';

export default function SendMessage(): ReactElement {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ status, setStatus ] = useState('');

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setStatus('Sending...');

    // LOGIC TO CALL API ROUTE
  }

  const Separator = () => (
    <div className="border-t border-slate-500 w-full mx-auto mb-2"></div>
  );

  return (
    <form className={ 'flex flex-col bg-slate-500 bg-opacity-60 text-slate-100 rounded-xl px-3 py-4 max-w-screen-md mx-auto' }>

      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='text'
        placeholder='Name'
        value={ name }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) }
        required
      />

      <Separator />

      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='email'
        placeholder='Email'
        value={ email }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
        required
      />

      <Separator />

      <input
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        type='text'
        placeholder='Subject'
        value={ subject }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value) }
        required
      />

      <Separator />

      <textarea
        className={ 'bg-transparent text-slate-100 placeholder-slate-400 p-1 focus:outline-none' }
        placeholder='Message'
        value={ message }
        onChange={ (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value) }
        required
      />

      <button
        className='text-slate-100 bg-slate-500 h-9 rounded-xl w-fit mx-auto px-4 hover:bg-slate-400 focus:bg-slate-300 hover:text-slate-700 transition duration-300'
        type='submit'>
        Send Message
      </button>


      { status && <p>{ status }</p> }

    </form>
  );
}