

import "./project.css";
import project1 from "../Images/project1.png";


const Projects = () => {
  return (
    <div>
         <div className="project-head">
           <h1 className="animate__animated  animate__bounce  home-content">
            Projects
                   </h1>
         </div>
      <div className="project-page">
        <div className="project-content">
          <h1>Online Music Player</h1>
          <img src={project1} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/meenatchi-14/Online-Music-Player-frontEnd.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code{" "}
            </a>
            <a
              href={"https://reliable-bombolone-4c6822.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            <a
              href={"https://github.com/meenatchi-14/Online_Music_Player_BackEnd.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Back-End Source code
            </a>
  
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;