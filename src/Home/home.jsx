import "./home.css"
import homeImage from "../Images/M-logo.webp"
import gitImage from "../Images/git.jpeg"
import linkedInImage from "../Images/linkedin.png"

const Home = () => {
  return (
    <div className="container home-page">
      <div className="body-content">
        <h1 className="animate__animated animate__bounce home-content">Hi</h1>
        <h1 className="animate__animated animate__bounce home-content">
          I&apos;m Meenatchi
        </h1>
        <h1 className="animate__animated animate__bounce home-content">
          Full Stack Web Developer
        </h1>
        <br />
        <a
          href={"https://github.com/meenatchi-14"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImage} alt="github" />
        </a>{" "}
        {"  "}
        <a
          href={"https://www.linkedin.com/in/meenatchi-rajarathinam-8b3b56186/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInImage} alt="linkedin" />
        </a>
        <br />
        <button className="btn btn-resume">
          <a href={""}
          target="_blank"
          rel="noopener noreferrer" 
          alt="loading"
          >
            Resume
          </a>
        </button>
      </div>

      <div className="contact-logo"></div>
      <img src={homeImage} alt="Home" />
    </div>
  );
};
export default Home;
