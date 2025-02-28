import htmlImage from "../Images/HtmlSkills.png";
import cssImage from "../Images/css.png";
import JavaScriptImage from "../Images/JavaScriptSkills.png";
import BootStrapImage from "../Images/BootStrapSkills.png";
import GitHubIMage from "../Images/GithubSkills.png";
import GitCloneImage from "../Images/GitSkills.png";
import ReactImage from "../Images/ReactSkills.png";
import ReduxImage from "../Images/ReduxSkills.png";
import NodeImage from "../Images/NodeSkills.png";
import Netlify from "../Images/netlify.png";
import Sql from "../Images/sql.png";
import MongoImage from "../Images/MongoSkills.png";
import "./skills.css";
export default function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-left-side">
        <h1 className="home-content skills-heading">
          Tech Stacks
        </h1>
        <div className="tech-stack">
          <img src={htmlImage} alt="htmlImage" />
          <img src={cssImage} alt="cssImage"/>
          <img src={BootStrapImage} alt="BootStrapImage" />
          <img src={JavaScriptImage} alt="JavaScriptImage" />
          <img src={ReactImage} alt="ReactImage" />
          <img src={ReduxImage} alt="ReduxImage" />
          <img src={GitHubIMage} alt="GitHubIMage" />
          <img src={MongoImage} alt="MongoImage" />
          <img src={NodeImage} alt="NodeImage" />
          <img  src={Netlify} alt="netlify"/>
          <img src={GitCloneImage} alt="GitCloneImage" />
          <img src={Sql} alt="sql"/>
        </div>
      </div>
    </div>
  );
}