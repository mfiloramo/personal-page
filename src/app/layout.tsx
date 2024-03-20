import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { dm_sans } from '@/utilities/fonts';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michael Filoramo ‣ Software Engineer',
  description: 'A portfolio containing information about the professional software engineering background of Michael Filoramo',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={ `min-h-screen ${ dm_sans.className }` }>

    {/* VERCEL APPLICATION ANALYTICS */ }
    <Analytics />

    {/* VERCEL APPLICATION TELEMETRY */ }
    <SpeedInsights />

    {/* TODO: FIX NAV AND FOOTER ANCHORING IN MOBILE LAYOUT */ }
    {/* MAIN CONTAINER */ }
    <div className='flex flex-col h-screen overflow-x-hidden'>

      {/* NAVBAR */ }
      <Navbar />

      {/* ROUTER */ }
      <main
        className='flex-grow overflow-y-auto overflow-x-hidden section-shadow bg-blue-grid-background bg-cover bg-center'>
        { children }
      </main>

      {/* FOOTER */ }
      <Footer />
    </div>
    </body>
    </html>
  );
}
