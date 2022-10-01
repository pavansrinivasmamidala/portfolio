/* eslint-disable react/style-prop-object */
import "./Project.css";
import spacestagram from '../../assets/spacestagram.png';

export default function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="project-card">
          <div className="description">
            <div>
              <span className="title"> Type with Friends </span>
            </div>

            <div className="project-info">
              <span>A Multiplayer typing game inspired by <span className="highlight">monkeytype.com</span>  (Currently working on it)</span>
            </div>

            <div className="project-link">
              <a
                className="link"
                href="https://github.com/pavansrinivasmamidala/type-with-friends"
                target="__blank"
              >
                <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" alt="github-logo" />
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
              width="550px"
              alt="project-1"
              height="350px"
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
               <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" alt="github-logo" />
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
               A space themed instagram clone built as a part of Shopify Internship challenge.
              </span>
            </div>

            <div className="project-link">
              <a
                className="link"
                href="https://github.com/pavansrinivasmamidala/spacestagram"
                target="__blank"
              >
                <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" alt="github-logo" />
              </a>
              <a
                className="link"
                href="https://spacestagram-lyart.vercel.app/"
                target="__blank"
              >
               <img src="https://img.icons8.com/sf-black/32/000000/external-link.png" alt="link to project" />
              </a>
            </div>
          </div>
          <div className="screenshot">
            <img
              src={spacestagram}
              width="550px"
              alt="project-1"
              height="350px"
            />{" "}
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
        </div>
      </div>
    </>
  );
}
