import Button from '@/components/button';
import Link from 'next/link';
import NavDropdown from '@/components/nav-dropdown';

export default function Navbar(): JSX.Element {
  const navLinks: string[] = [ 'about', 'portfolio', 'services', 'contact' ];
  const mediaLinks: any[] = [
    { image: '/images/media-logos/github-logo.png', url: 'https://github.com/mfiloramo' },
    { image: '/images/media-logos/linkedin-logo.png', url: 'https://www.linkedin.com/in/michael-filoramo/' },
    { image: '/images/media-logos/spotify-logo.png', url: 'https://open.spotify.com/user/quathan?si=6d0e06cc0cb04e47' },
  ];

  return (
    <div className='flex bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 min-h-24 max-h-24 z-50'>

      {/* CENTER CONTAINER */}
      <div className='flex-grow flex items-center justify-around mx-auto max-w-screen-md w-full'>

        {/* LOGO */}
        <Link className={'sm:flex cursor-pointer z-20 -mr-16 sm:-mr-6 -mt-1'} href={'/'}>
          <img className='mt-2 h-16 w-auto' src='/images/general-logos-color/app-logo-color.png' alt='logo' />
        </Link>

        {/* NAV BUTTONS (DESKTOP) */}
        <div className='hidden sm:flex space-x-4 ml-14'>
          { navLinks.map((link: string) => (
            <Button key={ link } href={ link }>{ link }</Button>
          )) }
        </div>

        {/* MEDIA BUTTONS */}
        <div className='hidden sm:flex flex-shrink-0'>
          { mediaLinks.map(({ image, url }, index) => (
            <Link className={'mr-4'} key={ index } href={ url }>
              <img src={ image } alt='media button' height='30px' width='30px' />
            </Link>
          )) }
        </div>
      </div>

      {/* HAMBURGER MENU */}
      <div className='flex sm:hidden mt-4'>
        <NavDropdown />
      </div>
    </div>
  )
}
