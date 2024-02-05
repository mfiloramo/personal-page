'use client';
import { ReactElement } from 'react';

export default function Top100CampPage(): ReactElement {
  return (
    <div>
      <img className={'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]'} src='/images/construction.png' alt='Construction Image' />

      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        <p><i>
          I migrated and redesigned the NBPA&apos;s top100camp.com website from WordPress to Angular/Express, introducing a serverless backend and hosted on Vercel for improved performance and user experience.
        </i></p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Enhancing NBPA&apos;s Digital Footprint</b>
          <br />
          For the National Basketball Players Association (NBPA), we undertook a significant project to migrate their top100camp.com website from a WordPress foundation to a modern Angular application. This migration, coupled with a serverless backend architecture hosted on Vercel, not only modernized the website but also improved its overall web visibility, animations, transitions, and responsiveness, offering a superior user experience.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Transitioning to Meet Modern Web Standards</b>
          <br />
          The primary challenge was to transition the NBPA&apos;s website to a platform that could meet modern web standards for speed, design, and user engagement without losing the essence of its content and functionality.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>A Comprehensive Platform Overhaul</b>
          <br />
          The solution was a comprehensive overhaul to an Angular- and Express-based platform with a serverless backend on Vercel. This strategic migration enhanced the site’s loading speed, web visibility, and user interface with smoother animations and a more responsive design. The integration of the Instagram API further ensured that the website remained vibrant and engaging, setting a new benchmark for the NBPA’s digital presence.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Technology Stack</b>
          <br />
          TypeScript, Angular, Express, Vercel, Instagram API
        </p>
      </div>
    </div>
  );
}
