import Button from '@/components/button';

export default function Navbar(): any {
  const navLinks: string[] = [ 'about', 'portfolio', 'contact', 'miscellaneous', 'nothing' ];
  const mediaImages: any[] = [];


  return (
    <div className='bg-slate-900 h-24 mt-0 z-10 shadow-2xl'>
        {/* MAIN CONTAINER */ }
      <div className='flex flex-row space-x-6'>

        {/* LOGO */ }
        <img className='ml-4' src='/falcon.png' alt='logo' height='70' width='78' />

        {/* NAV BUTTONS */ }
        { navLinks.map((link: string): any => {
          return <Button key={ link } href={ link }>{ link }</Button>
        }) }

        {/* MEDIA BUTTONS */}


      </div>
    </div>
  )
}