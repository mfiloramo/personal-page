import type { Metadata } from 'next'
import './globals.css'
import { dm_sans } from '@/utils/fonts';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';

export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'A personal page containing information about myself, as well as work',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={ dm_sans.className } style={ { height: '100%' } }>

    {/* MAIN CONTAINER */ }
    <div className='flex flex-col min-h-screen overflow-x-hidden'>

      {/* NAVBAR */ }
      <Navbar />

      {/* ROUTER */ }
      <main className='flex-grow pt-16 transition ease-in-out delay-150 overflow-y-auto shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)] bg-blue-grid-background bg-cover bg-center'>
        { children }
      </main>

      {/* FOOTER */ }
      <Footer />

    </div>
    </body>
    </html>
  )
}
