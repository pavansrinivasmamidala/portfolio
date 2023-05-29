import "./About.css";
import illustration from "../../assets/illustration.svg";

export default function About() {
  return (
    <div className="container">
      <div className="about-main">
        <div className="about-left" data-aos="zoom-in" data-aos-duration="600">
          <img src={illustration} alt="not loading" />
        </div>
        <div className="about-right" >
          <div className="about-right-top">
            <h3>
              Passionate Web Developer Crafting{" "}
              <span> Digital Experiences </span>in Canada
            </h3>
            <p>
              From computer enthusiast to a skilled web architect, I've embarked
              on a journey to craft captivating, visually stunning, and
              user-centric websites by harnessing the power of cutting-edge
              technologies like React JS, Angular and Node JS. 
            </p>
          </div>
          <div>
            <div className="social-media" data-aos="fade-up" data-aos-duration="600">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/pavansrinivasmamidala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="icon facebook"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/pavan_mamidala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="icon twitter"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pavan___srinivas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="icon instagram"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pavan-srinivas-mamidala-152139154/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="icon linkedin"></div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/pavansrinivasmamidala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="icon github"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
