

import "./project.css";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project4 from "../Images/project4.png";
import project5 from "../Images/project5.png";

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
     
        <div className="project-content">
          <h1>ShortNotes</h1>
          <img src={project2} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/meenatchi-14/shortNotes_ClientSide"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code{" "}
            </a>
            <a
              href={"https://6817789c128f2bd40fa22ad9--shortnoteforcontent.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            <a
              href={"https://github.com/meenatchi-14/shortNotes_BackEnd.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Back-End Source code
            </a>
  
          </div>
        </div>
        <div className="project-content">
          <h1>PasswordReset</h1>
          <img src={project4} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/meenatchi-14/passwordForntEnd.git "}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code{" "}
            </a>
            <a
              href={"https://magenta-tanuki-c548b5.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            <a
              href={"https://github.com/meenatchi-14/passwordBackEnd.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Back-End Source code
            </a>
  
          </div>
        </div>
        <div className="project-content">
          <h1>FrontProject</h1>
          <img src={project5} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/meenatchi-14/FrontProject"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code{" "}
            </a>
            <a
              href={"https://681786c1c53ca88a1d35f8e5--frontprojectdemo.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            
  
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default Projects;