import "./Techstack.css";
import svelte from "../../assets/svelte.png";

export default function Techstack() {
  return (
    <div>
      {/* <div className="techstack-header" data-aos="fade-right" data-aos-duration="1200">
        <span>Tech Stack</span>
      </div> */}
      <div className="slideshow-1">
        <div className="images">
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/html-5--v2.png"
              alt="not loading"
            />
            <span className="icon-text">HTML</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/css3.png"
              alt="not loading"
            />
            <span className="icon-text">CSS</span>
          </div>

          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/javascript.png"
              alt="not loading"
            />
            <span className="icon-text">JS</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/react-native.png"
              alt="not loading"
            />
            <span className="icon-text">React</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/angularjs.png"
              alt="not loading"
            />
            <span className="icon-text">Angular</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <svg
              width="3.5vw"
              height="7vh"
              viewBox="0 0 148 90"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ transform: "translateX(4%)", shapeRendering: "auto" }}
              className="next-logo"
            >
              <path
                d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                fill="black"
                fill-rule="nonzero"
              ></path>
            </svg>
            <span className="icon-text">Next JS</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img src={svelte} alt="not loading" width="3.5vw" height="7vh" />
            <span className="icon-text">Svelte</span>
          </div>
        </div>

        <div className="images" data-aos="fade-up" data-aos-duration="500">
          <div className="logo-card" data-aos-delay="50">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/linux.png"
              alt="not loading"
            />
            <span className="icon-text">Linux</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/docker.png"
              alt="not loading"
            />
            <span className="icon-text">Docker</span>
            
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="data:image/png;base64,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"
              alt="not loading"
            />
            <span className="icon-text">Tailwind</span>
            
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500" title="Amazon Web Services">
            <img
              src="data:image/png;base64,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"
              alt="not loading"
              title="Amazon Web Services"
            />
            <span className="icon-text">AWS</span>
            
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/windows/256/000000/nodejs.png"
              alt="not loading"
            />
            <span className="icon-text">Node JS</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png"
              alt="not loading"
            />
            <span className="icon-text">MongoDB</span>
            
          </div>
        </div>

        <div className="images">
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios/100/000000/java-coffee-cup-logo--v1.png"
              alt="not loading"
            />
            <span className="icon-text">Java</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/php-logo.png"
              alt="not loading"
            />
            <span className="icon-text">PHP</span>
          </div>
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png"
              alt="not loading"
            />
            <span className="icon-text">C#</span>
          </div>
          {/* <div className="logo-card" data-aos-delay="50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
              alt="not loading"
            />
            <span className="icon-text">Socket.io</span>
          </div> */}

          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/python.png"
              alt="not loading"
            />
            <span className="icon-text">Python</span>
          </div>
          
          <div className="logo-card" data-aos="fade-up" data-aos-duration="500">
            <img
              src="https://img.icons8.com/small/100/000000/bash.png"
              alt="not loading"
            />
            <span className="icon-text">Bash</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="logo-card">
// <img
//   src="https://img.icons8.com/windows/100/000000/nodejs.png"
//   alt="not loading"
// />
// </div>
// <div className="logo-card">
// <img
//   src="https://img.icons8.com/ios/100/000000/java-coffee-cup-logo--v1.png"
//   alt="not loading"
// />
// </div>

// </div>
// <div className="logo-card" data-aos-delay="50">
// <img
//   src="https://img.icons8.com/ios-filled/100/000000/visual-studio-logo.png"
//   alt="not loading"
// />
// </div>

// <div className="logo-card">
// <img
//   src="https://img.icons8.com/ios-filled/100/000000/git.png"
//   alt="not loading"
// />
// </div>

// <div className="logo-card">
// <img
//   src="https://img.icons8.com/ios-filled/50/000000/virtualbox.png"
//   alt="not loading"
// />
// </div>
