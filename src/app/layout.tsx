import type { Metadata } from 'next'
import './globals.css'
import { dm_sans } from '@/utils/fonts';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';



export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'A personal page containing information about myself, as well as work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={ dm_sans.className }>

    {/* MAIN CONTAINER */ }
    <div className='flex flex-col h-screen overflow-x-hidden overflow-y-hidden'>

      {/* NAVBAR */ }
      <Navbar />

      {/* ROUTER */ }
      <main className='flex-grow pt-16 transition ease-in-out delay-150 overflow-y-scroll bg-no-repeat' style={{ backgroundImage: 'url(/backgrounds/blue-background.png)'}}>
        { children }
      </main>

      {/* FOOTER */ }
      <Footer />

    </div>
    </body>
    </html>
  )
}
