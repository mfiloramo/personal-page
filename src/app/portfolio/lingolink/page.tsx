'use client';
import { ReactElement } from 'react';

export default function LingoLinkPage(): ReactElement {
  return (
    <div>
      <img className={ 'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]' } src='/images/construction.png'
           alt='Construction Image' />

      <div className={ `mx-auto max-w-screen-md text-xl p-8` }>
        <p><i>
          I architected, developed, and launched LingoLink, a dynamic multilingual messaging platform that allows users
          to communicate with others regardless of the language they speak.
        </i></p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>Diverse Languages, Disconnected Voices</b>
          <br />
          In my prior role as an educator, I felt privileged to teach students from every corner of the globe—yet was
          equally challenged by my struggle to effectively communicate with them.
          <br /><br />
          Back-and-forth exchanges using Google Translate proved slow and cumbersome, more hindering than helpful.
          Needing a swift, dependable, and secure communication tool and finding none that met my needs, I resolved to
          build it myself.
        </p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>Deleting Language Barriers</b>
          <br />
          Driven by this need to bridge the communication gap, I developed LingoLink—a solution that eliminates language
          barriers by leveraging the power of Google Translate, enabling users to effortlessly communicate in their
          native tongues.
          <br /><br />
          Unlike the tedious process of manual translation, LingoLink facilitates instant, automatic translation and
          caching of messages, ensuring conversations flow naturally and efficiently. With LingoLink, the vision is
          clear: to create a space where language no longer divides us, but unites us, making communication inclusive
          and accessible to all.
        </p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>Technology Stack</b>
          <br />
          TypeScript, Angular, Angular Material, Tailwind, Node.js, Express, SQL Server, Sequelize, Azure, GitHub
          Actions, Google Translate API, Courier.
        </p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>How It Works</b>
          <br />
          The development of LingoLink was guided by a commitment to efficiency, scalability, and user experience.
          Utilizing Angular for its robustness and Tailwind for its flexible and cohesive styling capabilities, I
          crafted a responsive and intuitive interface that caters to users worldwide.
          <br /><br />
          On the server side, a Node.js environment was chosen for its versatility and performance, handling real-time
          translations through the Google Translate API and interfacing with a SQL Server database on Azure for robust
          data management. This backend architecture not only supports full CRUD operations but does so through
          efficiently designed stored procedures in T-SQL, ensuring fast, secure, and reliable database interactions.
          <br /><br />
          Together, these technologies form the backbone of LingoLink, enabling seamless communication across language
          barriers.
        </p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>Bridging Classrooms Today</b>
          <br />
          LingoLink is currently making strides in local educational settings, where it significantly enhances
          communication between students and educators. Its deployment in my classroom has already shown promising
          results, facilitating more effective and inclusive interactions among students of diverse linguistic
          backgrounds.
          <br /><br />
          While still in its pre-alpha stage and available to a select user base through registration, LingoLink's
          impact is palpable among its early adopters. This growing community of users exemplifies the app's potential
          to transform communication in educational contexts and beyond.
        </p>

        <br />

        <p>
          <b style={ { textDecoration: 'underline' } }>Beyond the Classroom</b>
          <br />
          Looking ahead, LingoLink is intended to continue simplifying communication in diverse settings, particularly
          in educational environments where language barriers can hinder learning and interaction. Its application in
          classrooms will continue to enable students from various linguistic backgrounds to engage more fully with
          their peers and curriculum, fostering a more inclusive learning experience.
          <br /><br />
          Beyond education, LingoLink's utility as a general communication tool promises to bring closer connections in
          any multilingual context, from international businesses to global social networks. The future of LingoLink is
          not just as a messaging platform, but as a simple yet powerful tool for breaking down language barriers across
          the globe.
        </p>
      </div>
    </div>

  )
}
