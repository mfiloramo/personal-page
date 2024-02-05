import { ReactElement } from 'react';

export default function SinclairLogging(): ReactElement {
  return (
    <div>
      <img className={'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]'} src='/images/construction.png' alt='Construction Image' />

      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        <p><i>
          I spearheaded the development of an advanced logging system for Sinclair Broadcast Group, enhancing user activity tracking and system diagnostics across both frontend and backend environments.
        </i></p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Logging with Precision and Clarity</b>
          <br />
          Developed for Sinclair Broadcast Group, I designed and implemented a Logging Service that served as a comprehensive solution designed to meticulously track and log user activity across frontend and backend systems within our User/Contract Management platform. The service offers a holistic view of user sessions, actions, errors, and more, enhancing monitoring and diagnostic capabilities.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>The Challenge of Incomplete Visibility</b>
          <br />
          Prior to its implementation, capturing a holistic view of user interactions and system errors across both the frontend and backend of our User Management platform was a significant challenge. This lack of comprehensive logging detail hindered effective monitoring, making it difficult to diagnose issues promptly and accurately, ultimately impacting user experience and system reliability.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>A Comprehensive Logging Framework</b>
          <br />
          To address these challenges, I developed the Logging Service as a multi-layered system integrating both frontend and backend environments. It includes an Angular frontend service, a Node.js/Express backend, and SQL Server for data management, complemented by advanced performance monitoring and logging tools like Dynatrace and FluentD.
          <br /><br />
          This setup ensured detailed tracking of user actions, error logging with severity levels, and session management, all while maintaining high configurability and extensibility for specific logging needs.
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Technology Stack</b>
          <br />
          Node.js, Express, SQL Server, Sequelize, Dynatrace, FluentD, Azure, Azure DevOps
        </p>

        <br/>

        <p>
          <b style={{ textDecoration: 'underline' }}>Beyond Logging: A Tool for Insight and Debugging</b>
          <br />
          Initially designed to log user activities comprehensively, the Logging Service has evolved into an essential tool for Sinclair Broadcast Group’s internal debugging and monitoring within its User Management platform. Its efficiency and depth of data capture have made it indispensable for analyzing user behavior, optimizing user administration platforms, and enhancing system performance.
        </p>
      </div>
    </div>
  );
}
