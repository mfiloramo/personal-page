import { ReactElement } from 'react';

export default function TechTalk(): ReactElement {
  return (
    <div>
      <img className={'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]'} src='/images/construction.png' alt='Construction Image' />

      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        <p><i>
          I delivered a comprehensive introductory Tech Talk on WebSockets, detailing their mechanisms and protocols to over 100 software engineering students at a collaborative event with the Codesmith immersive boot camp and SingleSprout, a tech recruitment company.
        </i></p>

        <br/>

        <p>
          In a collaborative effort with Codesmith and SingleSprout, I had the privilege of leading an insightful Tech Talk on the intricacies of WebSockets to an audience of 100+ software engineering students. This session was designed to comprehensively overview the underlying mechanisms of WebSockets—a technology that enables real-time, bi-directional communication between web clients and servers.
        </p>

        <br/>

        <p>
          Through a detailed exploration, we delved into the core protocols that govern WebSockets, offering a deep dive into how they facilitate a persistent connection for seamless data exchange—crucial for applications requiring live updates without the need for constant polling.
        </p>

        <br/>

        <p>
          The talk covered a broad spectrum of topics, starting with the basic concepts of WebSockets, followed by the technicalities of WebSocket protocols, and how they differ from traditional HTTP communications. Emphasizing practical application, the session included live demonstrations of WebSocket communication in action, showcasing how to implement real-time chat applications, live feeds, and interactive gaming experiences.
        </p>

        <br/>

        <p>
          By breaking down complex technical content into digestible, engaging discussions, the workshop aimed not only to educate but also to inspire the next generation of software engineers to innovate and explore the possibilities of real-time web technologies in their future projects.
        </p>
      </div>
    </div>
  );
}
