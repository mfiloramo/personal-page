'use client';
import { ReactElement } from 'react';

export default function HiFiberPage(): ReactElement {
  return (
    <div>
      <img className={'shadow-2xl mt-4 max-w-screen-md mx-auto w-80 sm:w-[35vw]'} src='/images/construction.png' alt='Construction Image' />

      <div className={`mx-auto max-w-screen-md text-xl p-8`}>
        <p><i>
          I contributed to creating HiFiber, a React DevTool designed for visualizing the React Fiber tree, facilitating easier debugging and performance optimization for frontend developers.
        </i></p>

        <br/>

        <p>
          <b><u>Revolutionizing React Debugging with HiFiber</u></b>
          <br />
          HiFiber is a Chrome devtool tailored for frontend engineers at any stage of their career. It simplifies the debugging of React applications by offering advanced visualization and analysis of the React Fiber tree. This tool is designed to improve codebase understanding and enhance performance optimization by identifying inefficiencies in the rendering process.
        </p>

        <br/>

        <p>
          <b><u>Navigating the Complexity of the React Fiber Tree</u></b>
          <br />
          Frontend engineers often face challenges in comprehending and debugging the complex structure of React's Fiber tree. Traditional tools fall short in providing clear insights, making it difficult to pinpoint performance bottlenecks and unnecessary re-renders within the application's architecture.
          <br /><br />
          <b><u>Streamlined Debugging with Advanced Visualization</u></b><br />
          HiFiber addresses these challenges by integrating a sophisticated visualization engine that maps out the React Fiber tree post-reconciliation. It enables developers to easily identify critical nodes, analyze render times, and understand state changes, thereby streamlining the debugging process and enhancing application performance.
          <br /><br />
          <b><u>Technology Stack</u></b><br />
          JavaScript, React, AWS
          <br /><br />
          <b><u>Empowering Developers, Enhancing Applications</u></b><br />
          Currently, HiFiber is enhancing how developers interact with their React codebases. From easing the onboarding process for new engineers to providing deep dive tools for seasoned professionals, it facilitates a more intuitive understanding of application structures and performance metrics.
          <br /><br />
          <b><u>Expanding Horizons: From Visualization to Optimization</u></b><br />
          Looking forward, HiFiber aims to broaden its impact through containerization for diverse development environments, integrating D3.js for more refined data visualization, and incorporating NoSQL databases for performance metric caching over time. These enhancements promise to make frontend debugging not just simpler, but also a more data-driven and insightful experience.
        </p>
      </div>
    </div>
  );
}
