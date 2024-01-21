'use client';
import React, { useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { dm_sans } from '@/utils/fonts';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Page',
  description: 'A personal page containing information about myself, as well as work',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const [ opacityClass, setOpacityClass ] = useState('opacity-0');

  useEffect((): void => {
    setOpacityClass('opacity-100 transition-opacity duration-1000 ease-in-out');
  }, []);

  return (
    <html lang='en'>
    <body className={ `h-full ${ dm_sans.className }` }>

    {/* APPLICATION TELEMETRY */}
    <SpeedInsights />

    {/* FADE-IN WRAPPER */ }
    <div className={ `${ opacityClass }` }>
      {/* MAIN CONTAINER */ }
      <div className='flex flex-col min-h-screen overflow-x-hidden'>

        {/* NAVBAR */ }
        <Navbar />

        {/* ROUTER */ }
        <main
          className='flex-grow overflow-y-auto shadow-[inset_0_6px_20px_rgba(0,0,0,0.6)] bg-blue-grid-background bg-cover bg-center'>
          { children }
        </main>

        {/* FOOTER */ }
        <Footer />
      </div>
    </div>
    </body>
    </html>
  );
}
