import "./Project.css";

export default function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="project-card">
          <div className="screenshot">
            <img
              src="https://raw.githubusercontent.com/pavansrinivasmamidala/flight-tracker/master/demo/flight.jpg"
              width="550px"
              alt="project-1"
              height="350px"
            />
          </div>
          <div className="description">
            <div>
              <span className="title"> Flight Tracker </span>
            </div>
            {/* <div className="tags">
                <div className="tag">
                  <span> HTML</span>
                </div>
                <div className="tag">
                  <span> CSS</span>
                </div>
                <div className="tag">
                  <span> React JS</span>
                </div>
              </div> */}
            <div className="project-info">
              <span>
                An application to track flights based on real time data
              </span>
            </div>

            <div className="project-link">
              <a
                className="link"
                href="https://github.com/pavansrinivasmamidala/flight-tracker"
               target="__blank"
              >
                View in Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
