/* eslint-disable react/no-unescaped-entities */
import Intro from "./components/intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <section className="about">
        <h2>About</h2>
        <p>
          My journey in web development began in 2016 when I created my first website. Through WordPress, I gained a solid foundation in web
          technologies, and I've been developing web projects ever since.
        </p>
        <p>
          My primary focus is on building fast, engaging interfaces, currently with a keen interest in Next.js. I enjoy crafting designs and
          writing HTML & CSS to bring ideas to life.
        </p>
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        <div className="work">
          <div className="work-heading">
            <div className="work-heading-company-name">SkyAir - Global Aircraft Charter Service</div>
            <div className="work-heading-work-type">Remote</div>
            <div className="work-heading-work-year">Sep 2018 - Dec 2023</div>
          </div>
          <div className="work-role">Web Developer</div>
          <p>
            Skyair is an aviation services provider headquartered in Istanbul, Turkey. They specialize in arranging professional air charter
            flights around the world. Provided comprehensive technical support for Skyair's subsidiary websites, including SkyAirShop,
            TSELojistik, StarAirCharter, and SkyLogistics. I provided comprehensive technical support for WordPress website, including
            design, management, SEO, and hosting administration.
          </p>
          <span>Archievements:</span>
          <ul>
            <li>Launched a new website design that increased traffic by 40%.</li>
            <li>Managed SEO campaigns that resulted in a 30% increase in organic search rankings.</li>
            <li>Optimized website performance to improve loading times by up to 30%.</li>
            <li>Troubleshoot and resolve website issues in a timely manner.</li>
          </ul>
          <span>Tech Stack: </span>
          <p>Wordpress, PHP, MySQL, Gutenberg Block, SEO, Responsive Design</p>
        </div>
        <div className="work">
          <div className="work-heading">
            <div className="work-heading-company-name">E-Vet Yazilim – Hasvet Medikal</div>
            <div className="work-heading-work-year">Jun 2021 - Sep 2021</div>
          </div>
          <div className="work-role">Front-end Developer</div>
          <p>
            E-Vet Yazilim is a leading and pioneering software company recognized globally for its success and quality. The company is a
            leader in the sector with its reliable solutions and technological approaches, making it a preferred choice in the international
            arena.
          </p>
          <span>Archievements:</span>
          <ul>
            <li>Developed modern and responsive web applications using React and Redux.</li>
            <li>Designed and coded aesthetically pleasing and functional user interfaces with a focus on user experience.</li>
            <li>Optimized code quality and performance through code reviews and testing.</li>
            <li>Gained the ability to work independently on complex front-end projects.</li>
            <li>Developed strong communication and collaboration skills in a team environment.</li>
          </ul>
          <span>Tech Stack: </span>
          <p>JavaScript, React, NextJS, Git, APIs, Figma, UI/UX Design, Responsive Design</p>
        </div>
        <div className="work">
          <div className="work-heading">
            <div className="work-heading-company-name">Freelance Developer</div>
            <div className="work-heading-work-year">2016 - Present</div>
          </div>
          <div className="work-role">Front-end Developer</div>
          <p>
            I worked as a Front-end Developer with multiple clients and technologies. I have provided responsive and high-performance
            website solutions to more than 20 customers.
          </p>
          <span>Archievements:</span>
          <ul>
            <li>Developed numerous websites and web applications for a variety of clients, focusing on WordPress and JavaScript.</li>
            <li>Designed and implemented custom WordPress themes and plugins to meet client-specific requirements.</li>
            <li>Utilized HTML, CSS, and JavaScript to create responsive and interactive user interfaces.</li>
            <li>Managed end-to-end project development from requirement gathering to deployment.</li>
            <li>Worked with clients to troubleshoot and resolve website issues, ensuring optimal performance and user satisfaction.</li>
            <li>Collaborated with designers and other developers to ensure high-quality deliverables.</li>
          </ul>
          <span>Tech Stack: </span>
          <p>
            Wordpress, PHP, MySQL, JavaScript, React, NextJS, Git, APIs, ACF, SEO, Figma, UI/UX Design, Responsive Design, Mobile First
            Design
          </p>
        </div>
      </section>
    </main>
  );
}
