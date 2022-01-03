import "./About.css";
import pavan from '../../assets/illustration.svg';

export default function About() {
  return (
    <div>
      <div className="about-main">
        <div className="about-left" data-aos="fade-right">
          <img
            src={pavan}
            alt="not loading"
          />
        </div>
        <div
          className="about-right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="about-right-top">
            <h3>A rookie aspiring to learn <span>Web Dev</span></h3>
            <h3>based in Canada</h3>
            
            <p>
              A computer geek found his way into learning how to develop websites. I used to fiddle around with Networking and learning Web Exploitation which rejuvenated a new interest in how websites are built and work. 
                I started to learn HTML, CSS and JS and tried to build some websites and finally stumbled upon React JS. I use many new libraries like Styled Components, State Management (Redux, Recoil) and Node Js to develop some great looking Projects.
                </p>
          </div>
          <div>
            <div className="social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/pavansrinivasmamidala" target="_blank" rel="noreferrer">
                  <div class="icon facebook"></div>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/pavan_mamidala" target="_blank" rel="noreferrer" >
                  <div class=" icon twitter"></div>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/pavan_srinivas2501/" target="_blank" rel="noreferrer">
                  <div class="icon instagram"></div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/pavan-srinivas-mamidala-152139154/" target="_blank" rel="noreferrer">
                  <div class="icon linkedin"></div>
                  </a>
                </li>
                <li>
                  <a href="https://www.github.com/pavansrinivasmamidala" target="_blank" rel="noreferrer">
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
