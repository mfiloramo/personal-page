import Button from '@/components/button';

export default function Navbar(): any {
  const navLinks: string[] = [ 'about', 'portfolio', 'contact', 'miscellaneous', 'nothing' ];
  const mediaLinks: any[] = [
    { image: '/media-logos/facebook-logo.png', url: 'https://facebook.com' },
    { image: '/media-logos/x-logo.png', url: 'https://twitter.com' },
    { image: '/media-logos/insta-logo.png', url: 'https://instagram.com' },
    { image: '/media-logos/linkedin-logo.png', url: 'https://linkedin.com' }
  ];

  return (
    <div className='bg-slate-900 h-24 mt-0 z-10 shadow-2xl w-full'>

      {/* MAIN CONTAINER */ }
      <div className='flex flex-row space-x-12 mr-4 mt-9 w-screen'>

        {/* LOGO */ }
        <img className='-mt-4 ml-10 h-14 w-14' src='/app-logo.png' alt='logo' />

        {/* NAV BUTTONS */ }
        <div className='flex flex-row space-x-1 pl-20'>
          { navLinks.map((link: string): any => {
            return <Button key={ link } href={ link }>{ link }</Button>
          }) }
        </div>

        {/* MEDIA BUTTONS */ }
        <div className='flex flex-row space-x-6'>
          { mediaLinks.map(({ image, url }, index) => (
            <a key={ index } href={ url } target="_blank" rel="noopener noreferrer">
              <img src={ image } alt='media button' height='40px' width='40px' />
            </a>
          )) }
        </div>

      </div>
    </div>
  )
}