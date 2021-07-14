import project1 from '../proj1.jpg';
import project2 from '../proj2.jpg';
import project3 from '../proj3.jpg';
import project4 from '../proj4.jpg';
function Pj(){
    return(
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">

          <div className="project-card">
            <img src={project1} alt="project" />
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>

          <div className="project-card">
            <img src={project2}alt="project" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>

          <div className="project-card">
            <img src={project3} alt="project" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>

          <div className="project-card">
            <img src={project4} alt="project" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
        </div>
      </section>
    )
}
export default Pj