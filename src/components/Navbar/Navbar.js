import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="topbar" data-aos="fade-down">
      <div className="topbar-inner">
        <div className="topbar-inner-name">
          <a href="/">
            <span>Pavan Srinivas Mamidala</span>
          </a>
        </div>
        <div className="topbar-inner-menu">
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#education">
                <span>Education</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div class="button-div">
              <span class="button-div-first">Download CV</span>
              <span>Download CV</span>
            </div>
        </div>
        </div>
        
    </div>
  );
}
