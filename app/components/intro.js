/* eslint-disable react/no-unescaped-entities */
import Available from "./available";
import Icons from "./icons";

export default function Intro() {
  return (
    <div>
      <div className="heading">
        <div className="name">Faruk Ipek</div>
        <Available />
      </div>
      <div className="role">Front-end Developer</div>
      <div className="introduction">
        I'm a front-end developer from Chicago, USA. I've been designing and developing websites since 2016. I have collaborated with
        clients across different countries and industries, creating diverse web solutions.
      </div>
      <Icons />
    </div>
  );
}
