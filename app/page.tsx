import Image from "next/image";
import website from "../public/website.svg";
import email from "../public/email.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";
import twitter from "../public/x.svg";
import location from "../public/location.svg";
import Link from "next/link";
import Project from "./components/Project/Project";

const projects = [
  {
    title: "Meta Tags Generator",
    description: "Efficient Code Generator Tool for Frontend Developers.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://generateforfrontend.com/",
    archived: false,
  },
  {
    title: "Skyair",
    description: "Skyair based in Turkey and we are an aviation services provider.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://skyair.com.tr",
    archived: false,
  },
  {
    title: "MentorBul",
    description: "MentorBul connects you with mentors and mentees.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://mentor-bul-farukipekcom.vercel.app/",
    archived: true,
  },
];
export default function Home() {
  return (
    <div className="max-w-2xl px-4 py-4 md:px-0 mx-auto flex flex-col gap-1.5 md:py-10">
      <div className="flex items-center gap-4">
        <div className="min-w-28 ">
          <Image src="/faruk.jpg" alt="Faruk Ipek" width={112} height={112} className="rounded-2xl" />
        </div>
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold">Faruk Ipek</h1>
          <p className="text-sm md:text-base font-normal mt-0.5">
            Frontend Developer building fast, modern, and user-focused web applications.
          </p>
          <div className="flex gap-1 mt-1">
            <Image src={location} alt="Location" width={16} height={16} />
            <span className="text-sm font-medium text-gray-700">Chicago, USA</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <div className="flex gap-2">
          <Link href="https://farukipek.com" target="_blank" className="social-links">
            <Image src={website} alt="Faruk Ipek's Website" width={16} height={16} />
          </Link>
          <Link href="mailto:faruk@farukipek.com" target="_blank" className="social-links">
            <Image src={email} alt="Email Address" width={16} height={16} />
          </Link>
          <Link href="https://github.com/farukipekcom" target="_blank" className="social-links">
            <Image src={github} alt="GitHub Profile" width={16} height={16} />
          </Link>
          <Link href="https://linkedin.com/in/farukipekcom" target="_blank" className="social-links">
            <Image src={linkedin} alt="LinkedIn Profile" width={16} height={16} />
          </Link>
          <Link href="https://x.com/farukipekcom" target="_blank" className="social-links">
            <Image src={twitter} alt="X Profile" width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">About</h2>
        <p>
          Front-End Web Developer with 6+ years of experience building responsive, accessible, high-performance websites and applications.
          Skilled in React, Next.js, TypeScript, API integration, headless CMS, technical SEO, and Core Web Vitals. Collaborates with
          design, product, and marketing teams to deliver user-focused experiences.
        </p>
      </div>
      <div className="card">
        <h2 className="card-title">Work Experience</h2>
        <div className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-info-title">HARMAN International — Lifestyle Division (JBL)</h3>
            <span className="card-item-info-date">Jul 2023 – May 2026</span>
          </div>
          <span className="card-item-info-subtitle">Front-End Developer | Remote</span>
          <p className="card-item-details">
            Designed, developed, and maintained frontend applications across multiple web projects, delivering responsive and accessible
            user interfaces while implementing new features and continuously improving performance and usability.
          </p>
          <p className="text-sm font-semibold text-gray-700 mt-2">Key Contributions:</p>
          <ul className="list-disc ml-4 flex flex-col gap-1 mt-2">
            <li>
              Developed and maintained responsive, high-performance JBL websites and campaign landing pages using React, Next.js,
              TypeScript, HTML5, and CSS3, supporting product launches and demand-generation initiatives.
            </li>
            <li>
              Translated Figma designs into accessible, design-accurate interfaces, collaborating cross-functionally with design, product,
              marketing, and engineering teams to deliver production-ready digital experiences.
            </li>
            <li>
              Built reusable, component-based front-end solutions that improved consistency across pages and reduced development time for
              new features and campaigns by 20%.
            </li>
            <li>
              Improved Core Web Vitals, Lighthouse performance, technical SEO, and accessibility through image optimization, lazy loading,
              semantic markup, code optimization, and responsive asset delivery.
            </li>
            <li>
              Integrated REST APIs and CMS-managed content to deliver dynamic product information and enable scalable, maintainable content
              updates.
            </li>
            <li>
              Implemented and maintained Google Analytics and Google Tag Manager tracking to measure user behavior, campaign engagement, and
              conversion activity.
            </li>
            <li>Supported Agile delivery through sprint planning, code reviews, Git workflows, and stakeholder collaboration.</li>
          </ul>
          <ul className="tag-list">
            <li>Remote</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-info-title">SkyAir — Global Aircraft Charter Service</h3>

            <span className="card-item-info-date">Jun 2020 – May 2023</span>
          </div>
          <span className="card-item-info-subtitle">Front-End Developer | Istanbul, Turkey</span>
          <p className="card-item-details">
            Contributed to the development of modern web applications, collaborating with the team to build responsive, user-friendly
            interfaces and deliver new frontend features.
          </p>
          <ul className="list-disc ml-4 flex flex-col gap-1 mt-2">
            <li>
              Designed, developed, and maintained six responsive, accessible corporate and subsidiary websites using JavaScript, HTML5,
              CSS3, SCSS, and Content Management Systems (CMS), supporting international users across desktop and mobile devices
            </li>
            <li>
              Led a complete website redesign that modernized the user experience and contributed to a 40% increase in website traffic.
            </li>
            <li>
              Built new front-end features and enhanced existing applications based on business requirements, creating scalable solutions
              and improving code maintainability.
            </li>
            <li>
              Improved technical SEO and on-page structure, contributing to a 30% increase in organic traffic and stronger search
              visibility.
            </li>
            <li>
              Reduced page load times by 30% through front-end performance optimization, image optimization, and efficient asset delivery.
            </li>
            <li>
              Ensured consistent performance, usability, accessibility, and brand presentation across corporate and subsidiary websites.
            </li>
            <li>
              Implemented Google Analytics and Google Tag Manager tracking to support website analytics, user behavior analysis, and
              marketing initiatives.
            </li>
            <li>
              Managed hosting environments, deployments, Git workflows, and production releases while collaborating with managers and
              stakeholders throughout the delivery process.
            </li>
          </ul>
          <ul className="tag-list">
            <li>Remote</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-info-title">Frontend Developer (Freelance)</h3>
            <span className="card-item-info-date">2016 - Present</span>
          </div>
          {/* <span className="card-item-info-subtitle">Frontend Developer</span> */}
          <p className="card-item-details">
            Partnered with businesses and individual clients to design, develop, and maintain modern websites and web applications.
            Delivered more than 20 projects, managing the entire development process from planning and implementation to deployment and
            ongoing support.
          </p>
          <ul className="list-disc ml-4 flex flex-col gap-1 mt-2">
            <li>Delivered 20+ websites and web applications for clients across various industries.</li>
            <li>Built responsive and accessible user interfaces using modern frontend technologies.</li>
            <li>Developed custom WordPress solutions, including themes and functionality tailored to client requirements.</li>
            <li>Managed projects from client requirements and design handoff through deployment and maintenance.</li>
            <li>Improved website performance, SEO, and overall user experience.</li>
            <li>Collaborated with clients to troubleshoot issues and deliver reliable, high-quality solutions.</li>
          </ul>
          <ul className="tag-list">
            <li>Wordpress</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Git</li>
            <li>APIs</li>
            <li>ACF</li>
            <li>SEO</li>
            <li>Figma</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Mobile First Design</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">Education</h2>
        <div className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-info-title">Konya Technical University, Turkey</h3>
            <span className="card-item-info-date">Sep 2018 – Jan 2024</span>
          </div>
          <span className="card-item-info-subtitle">Bachelor of Science in Computer Engineering</span>
        </div>
        <div className="card-item">
          <div className="card-item-info">
            <h3 className="card-item-info-title">Akdeniz University, Turkey</h3>
            <span className="card-item-info-date">Sep 2014 – Jun 2016</span>
          </div>
          <span className="card-item-info-subtitle">Associate of Science in Computer Programming</span>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">Skills</h2>
        <ul className="tag-list skill-tag">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>SCSS</li>
          <li>Responsive Design</li>
          <li>Web Accessibility</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>Headless CMS</li>
          <li>Contentful</li>
          <li>WordPress</li>
          <li>Core Web Vitals</li>
          <li>Technical SEO</li>
          <li>Jest</li>
          <li>Git</li>
          <li>CI/CD</li>
          <li>Figma</li>
          <li>UI/UX Implementation</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="card-title">Projects</h2>
        <div className="card-projects">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
