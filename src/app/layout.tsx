import React, { useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { dm_sans } from '@/utils/fonts';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michael Filoramo ‣ Software Engineer',
  description: 'A personal page containing information about my professional background',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body className={ `min-h-screen ${ dm_sans.className }` }>

    {/* APPLICATION TELEMETRY */ }
    <SpeedInsights />

    {/* MAIN CONTAINER */ }
    <div className='flex flex-col h-screen overflow-x-hidden'>

      {/* NAVBAR */ }
      <Navbar />

      {/* ROUTER */ }
      <main
        className='flex-grow overflow-y-auto section-shadow bg-blue-grid-background bg-cover bg-center'>
        { children }
      </main>

      {/* FOOTER */ }
      <Footer />
    </div>
    </body>
    </html>
  );
}
