/* eslint-disable react/style-prop-object */
import "./Project.css";
import projectData from "./projects.json";

export default function Projects() {
  const ProjectCard = ({ project, index }) => {
    const isOdd = index % 2 === 1;

    return (
      <div
        className="project-card"
        style={{ flexDirection: isOdd ? "row-reverse" : "row" }}
      >
        <div className="screenshot" data-aos="zoom-in" data-aos-duration="1400">
          <img
            src={project?.imgLink}
            style={{ objectFit: "contain",border: project.border ? "2px solid black" : "", padding  : "8px 8px"  }}
            alt="project-1"
          />{" "}
          <div className="tags">
            {project?.tags.map((tag, i) => (
              <div className="tag">
                <span> {tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="description">
          <div>
            <span className="title"> {project?.title} </span>
          </div>

          <div
            className="project-info"
            dangerouslySetInnerHTML={{
              __html: `<span> ${project?.infoHTML}</span>`,
            }}
          ></div>
          <div className="project-link">
            <a className="link" href={project?.githubLink} target="__blank">
              <img
                src="https://img.icons8.com/ios-glyphs/32/000000/github.png"
                alt="github-logo"
              />
            </a>
            {project?.hostedLink ? (
              <a className="link" href={project?.hostedLink} target="__blank">
                <img
                  src="https://img.icons8.com/sf-black/32/000000/external-link.png"
                  alt="link to project"
                />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="project-container">
        {/* <div className="project-card">
          <div className="description">
            <div>
              <span className="title"> Type with Friends </span>
            </div>

            <div className="project-info">
              <span>
                A Multiplayer typing game inspired by{" "}
                <a
                  className="highlight"
                  href="https://monkeytype.com"
                  target="__blank"
                >
                  monkeytype.com
                </a>
                <br /> (*currently working on it)
              </span>
            </div>

            <div className="project-link">
              <a
                className="link"
                href="https://github.com/pavansrinivasmamidala/type-with-friends"
                target="__blank"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/32/000000/github.png"
                  alt="github-logo"
                />
              </a>
            </div>
          </div>
          <div className="screenshot">
            <img
              src="https://user-images.githubusercontent.com/31120424/182990372-b24135fb-81f1-48f2-9efd-c34ab197d154.png"
              style={{ objectFit: "contain" }}
              alt="project-1"
            />{" "}
            <div className="tags">
              <div className="tag">
                <span> HTML</span>
              </div>
              <div className="tag">
                <span> CSS</span>
              </div>
              <div className="tag">
                <span> Svelte</span>
              </div>
              <div className="tag">
                <span> Node JS</span>
              </div>
              <div className="tag">
                <span> Socket.io</span>
              </div>
              <div className="tag">
                <span> MongoDB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="screenshot">
            <img
              src="https://raw.githubusercontent.com/pavansrinivasmamidala/flight-tracker/master/demo/flight.jpg"
              width="55vw"
              alt="project-1"
            />{" "}
            <div className="tags">
              <div className="tag">
                <span> HTML</span>
              </div>
              <div className="tag">
                <span> CSS</span>
              </div>
              <div className="tag">
                <span> React JS</span>
              </div>
            </div>
          </div>
          <div className="description">
            <div>
              <span className="title"> Flight Tracker </span>
            </div>

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
                <img
                  src="https://img.icons8.com/ios-glyphs/32/000000/github.png"
                  alt="github-logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="description">
            <div>
              <span className="title"> Spacestagram </span>
            </div>

            <div className="project-info">
              <span>
                A space themed instagram clone built as a part of Shopify
                Internship challenge.
              </span>
            </div>

            <div className="project-link">
              <a
                className="link"
                href="https://github.com/pavansrinivasmamidala/spacestagram"
                target="__blank"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/32/000000/github.png"
                  alt="github-logo"
                />
              </a>
              <a
                className="link"
                href="https://spacestagram-lyart.vercel.app/"
                target="__blank"
              >
                <img
                  src="https://img.icons8.com/sf-black/32/000000/external-link.png"
                  alt="link to project"
                />
              </a>
            </div>
          </div>
          <div className="screenshot">
            <img src={spacestagram} width="55vw" alt="project-1" />{" "}
            <div className="tags">
              <div className="tag">
                <span> HTML</span>
              </div>
              <div className="tag">
                <span> Tailwind</span>
              </div>
              <div className="tag">
                <span> React JS</span>
              </div>
            </div>
          </div>
        </div> */}

        {projectData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
