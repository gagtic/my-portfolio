import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  AndroidLogo,
  NodeJsLogo,
  PhpLogo,
  ReactLogo,
  ReactNativeLogo,
  SeleniumLogo,
} from "./Logos";
import FirstTimelineElement from "./components/FirstTimelineElement";
import MidTimelineElement from "./components/MidTimelineElement";
import FinalTimelineElement from "./components/FinalTimelineElement";
import SectionHeader from "../SectionHeader";

const WorkTimeline = () => {
  return (
    <>
      <SectionHeader
        title="Experience"
        subtitle="People I have worked with so far"
      />
      <div className="mt-12 border-y-2 border-solid-heading">
        <VerticalTimeline>
          <FirstTimelineElement
            date="Mar 2024 - present"
            title="Senior React Native Developer"
            subtitles={["Diametos GmbH", "Devsters Labs", "Germany · Remote"]}
            logo={ReactLogo}
            content={
              "I have experience working with the Adjust SDK to measure and log app-based events for marketing purposes. On the backend, I have utilized NodeJS and Fastify, and I have implemented file downloading using AWS S3 URIs. I have worked with KnexJS for query building and added secure password reset functionality using email and tokens. Additionally, I developed a web portal for patient management using React and Vite, implementing Tailwind CSS for styling, Redux Tool Kit for global state management, and RTK Query for network requests."
            }
          />
          <MidTimelineElement
            date="Aug 2022 - Mar 2024"
            title="Mobile App Developer and Tester"
            subtitles={["Panelist", "Australia · Remote"]}
            logo={NodeJsLogo}
            content={
              "Panelist is your one-stop app to connect with professionals worldwide and check their event attendance. I have worked on the app's social media features, including the news feed and post reactions, and implemented WebSockets for live data updates. Additionally, I          integrated OneSignal for push notifications, a live chat system using WebSockets, and camera image and video capture features. For testing, I used Detox for automated testing, both headless and with an emulator, to verify different app paths and screen outputs. I also automated the app's publishing process on TestFlight using Fastlane."
            }
          />
          <MidTimelineElement
            date="Apr 2022 - Aug 2022"
            title="React Native Developer"
            subtitles={["Share Slate Inc", "California · Remote"]}
            logo={ReactNativeLogo}
            content={
              "Share Slate is a social media application featuring a news feed for user updates and posts, real-time chat using WebSockets, and multimedia sharing capabilities. Users can upload photos and videos from their gallery or camera and share their thoughts with others through the feed system. The app allows users to stay connected and engaged by offering a platform for user updates and posts, real-time chat, and a seamless multimedia-sharing experience."
            }
          />
          <MidTimelineElement
            date="Nov 2021 - Mar 2022"
            title={"React Native Developer"}
            subtitles={["Plum Networks", "San Diego, CA · Remote"]}
            logo={ReactNativeLogo}
            content="My Ticket Attorney is an online platform to automate your traffic tickets in America. Customers can upload their traffic tickets to the online app and an attorney can be appointed to them for fighting the case on their behalf in court."
          />
          <MidTimelineElement
            date="Jan 2021 - Oct 2021"
            title={"Full Stack Developerr"}
            subtitles={["Livrito", "California · Remote"]}
            logo={PhpLogo}
            content="Livrito is a delivery service app with a live store with a product listing. It also has a delivery tracking system that is based on web sockets to communicate location between two different devices. There is also a rating system for delivery men and orders."
          />

          <MidTimelineElement
            date="Jan 2020 - Dec 2020"
            title={"Android Developer - React Native App Developer"}
            subtitles={[
              "My Cleaning App",
              "London, England, United Kingdom · Remote",
            ]}
            logo={AndroidLogo}
            content="My cleaning app is an employee management system for cleaning agencies in the UK. The app is focused on tracking employees, and their shifts and managing the inventory of the cleaning houses. The app also tracks the cleaning jobs of an employee."
          />

          <MidTimelineElement
            date="Jun 2019 - Dec 2019"
            title={"Software Developer In Test"}
            subtitles={["UWorx Group", "Lahore, Pakistan · On-Site"]}
            logo={SeleniumLogo}
            content={
              "As a Developer in Test, I ensured the quality and reliability of software products through a combination of technical expertise and meticulous testing methodologies. I specialized in behavior-driven test automation using Cucumber and utilized Selenium (Java) for web application automation. I developed, optimized, and maintained automation scripts, conducted manual black box testing, and identified and documented defects with detailed reports. Additionally, I managed test data, designed effective test cases, and collaborated with stakeholders to ensure comprehensive testing, contributing to early defect detection and smoother development cycles."
            }
          />

          <MidTimelineElement
            date="Jun 2019 - Dec 2019"
            title={"Internee Android Developer"}
            subtitles={["Innovicks Inc.", "Faisalabad, Pakistan · On-Site"]}
            logo={AndroidLogo}
            content={
              "I built a cargo delivery application for a local start-up. The technologies included native Java-based Android App development, clean-cut animations, app distribution, and live location tracking."
            }
          />

          <FinalTimelineElement date="June 2019" />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkTimeline;
