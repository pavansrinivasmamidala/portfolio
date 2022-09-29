import "./Project.css";

function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="project-card">
          <div className="screenshot">
            <img
              src="https://raw.githubusercontent.com/pavansrinivasmamidala/flight-tracker/master/demo/4.jpg"
              width="650px"
              height="400px"
            />
          </div>
          <div className="description"> Description</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
