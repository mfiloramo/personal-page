import Button from '@/components/button';
import Link from 'next/link';
import NavDropdown from '@/components/nav-dropdown';

export default function Navbar(): JSX.Element {
  const navLinks: string[] = [ 'about', 'portfolio', 'services', 'contact' ];
  const mediaLinks: any[] = [
    { image: '/media-logos/github-logo.png', url: 'https://github.com/mfiloramo' },
    { image: '/media-logos/linkedin-logo.png', url: 'https://www.linkedin.com/in/michael-filoramo/' },
    { image: '/media-logos/spotify-logo.png', url: 'https://open.spotify.com/user/quathan?si=6d0e06cc0cb04e47' },
  ];

  return (
    <div className='flex justify-between bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 min-h-24 max-h-24 z-10'>

      {/* LOGO */}
      <Link className={'cursor-pointer z-20'} href={'/'}>
        <img className='ml-10 mt-4 sm:hidden' src='/graphics/app-logo-2.png' alt='logo' />
      </Link>

      {/* CENTER CONTAINER */}
      <div className='flex-grow flex items-center justify-end sm:px-40 max-w-screen-md'>

        {/* NAV BUTTONS (Desktop) */}
        <div className='hidden sm:flex space-x-4 mr-10'>
          { navLinks.map((link: string) => (
            <Button key={ link } href={ link }>{ link }</Button>
          )) }
        </div>

        {/* MEDIA BUTTONS */}
        <div className='hidden sm:flex flex-shrink-0'>
          { mediaLinks.map(({ image, url }, index) => (
            <a className={'mr-4'} key={ index } href={ url } target="_blank" rel="noopener noreferrer">
              <img src={ image } alt='media button' height='30px' width='30px' />
            </a>
          )) }
        </div>
      </div>

      {/* HAMBURGER MENU (Mobile) */}
      <div className='flex sm:hidden mt-4'>
        <NavDropdown />
      </div>
    </div>
  )
}
