import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavButton from '@/components/nav-button';
import NavDropdown from '@/components/nav-dropdown';
import { navLinkInterface } from '@/interfaces/NavLink.interface';
import { mediaLinkInterface } from '@/interfaces/MediaLinkInterface';

export default function Navbar(): ReactElement {
  const navLinks: navLinkInterface[] = [
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];
  const mediaLinks: mediaLinkInterface[] = [
    { image: '/images/media-logos/github-logo.png', url: 'https://github.com/mfiloramo' },
    { image: '/images/media-logos/linkedin-logo.png', url: 'https://www.linkedin.com/in/michael-filoramo/' },
    { image: '/images/media-logos/spotify-logo.png', url: 'https://open.spotify.com/user/quathan?si=6d0e06cc0cb04e47' },
  ];

  return (
    <div className='flex bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 min-h-24 max-h-24 z-50'>

      {/* CENTER CONTAINER */ }
      <div className='flex-grow flex items-center justify-around mx-auto max-w-screen-md w-full'>

        {/* LOGO */ }
        <Link className={ 'sm:flex cursor-pointer z-20 -mr-16 sm:-mr-6 -mt-1' } href={ '/' }>
          <Image
            className='mt-2'
            src='/images/general-logos-color/app-logo-color.png'
            alt='logo'
            height={ 64 }
            width={ 64 }
          />
        </Link>

        {/* NAV BUTTONS (DESKTOP) */ }
        <div className='hidden sm:flex space-x-4 ml-14'>
          {
            navLinks.map(({ path, label }): ReactElement => (
              <NavButton key={ label } path={ path } label={ label } />
            ))
          }
        </div>

        {/* MEDIA BUTTONS */ }
        <div className='hidden sm:flex flex-shrink-0'>
          {
            mediaLinks.map(({ image, url }, index: number): ReactElement => (
              <Link className={ 'mr-4' } key={ index } href={ url }>
                <Image src={ image } alt='media button' height={ 30 } width={ 30 } />
              </Link>
            ))
          }
        </div>
      </div>

      {/* HAMBURGER MENU */ }
      <div className='flex sm:hidden mt-4'>
        <NavDropdown />
      </div>
    </div>
  )
}
