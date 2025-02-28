import "./index.css";
import htmlImg from "../Images/HtmlAbout.png";
import cssIMg from "../Images/CSSAbout.png";
import javaScriptIcon from "../Images/javaScriptAbout.png";
import reactImg from "../Images/ReactAbout.png";
import mongoImg from "../Images/MongoAbout.png";
import nodeImg from "../Images/NoddAbout.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="left-side">
        <h1 className="animate__animated  animate__bounce  home-content">
          About Me
        </h1>
        <h2>
        Ambitious and adaptable graduate with a Bachelor&#39;s degree in Computer science engineering. Possessing strong interpersonal skills and a passion for FullStack developer. I am outgoing, dedicated, and open-minded. I believe that a person should work on developing their professional skills and learning new things all the time.I am eager to kickstart my career and contribute positively to a forward-thinking organization.
        </h2>
      </div>
      <div className="right-side">
        <div className="about-images">
          <img src={htmlImg} alt="html" />
          <img src={cssIMg} alt="css" />
          <img src={javaScriptIcon} alt="javascript" />
          <img src={reactImg} alt="react" />
          <img src={mongoImg} alt="mongodb" />
          <img src={nodeImg} alt="nodejs" />
        </div>
      </div>
    </div>
  );
};
export default About;