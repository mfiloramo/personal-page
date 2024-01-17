import Button from '@/components/button';
import Link from 'next/link';

export default function Navbar(): any {
  const navLinks: string[] = [ 'about', 'portfolio', 'services', 'contact' ];
  const mediaLinks: any[] = [
    { image: '/media-logos/github-logo.png', url: 'https://github.com/mfiloramo' },
    { image: '/media-logos/linkedin-logo.png', url: 'https://www.linkedin.com/in/michael-filoramo/' },
    { image: '/media-logos/spotify-logo.png', url: 'https://open.spotify.com/user/quathan?si=6d0e06cc0cb04e47' },
  ];

  return (
    <div className='bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 min-h-24 z-10 w-full pr-20'>

      {/* MAIN CONTAINER */ }
      <div className='flex flex-row justify-between mt-9 w-lg'>

        {/* LOGO */ }
        <Link href={'/'}>
          <img className='ml-24 -m-4 h-14 w-14' src='/graphics/app-logo-2.png' alt='logo' />
        </Link>

        {/* BUTTONS CONTAINER */}
        <div className='flex flex-row'>

          {/* NAV BUTTONS */ }
          <div className='flex flex-row space-x-4'>
            { navLinks.map((link: string): any => {
              return <Button key={ link } href={ link }>{ link }</Button>
            }) }
          </div>

          {/* MEDIA BUTTONS */ }
          <div className='flex flex-row space-x-6 -mt-1 pr-8 pl-14'>
            { mediaLinks.map(({ image, url }, index) => (
              <a key={ index } href={ url } target="_blank" rel="noopener noreferrer">
                <img src={ image } alt='media button' height='30px' width='30px' />
              </a>
            )) }
          </div>

        </div>
      </div>
    </div>
  )
}