import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="topbar" data-aos="fade-down">
      <div className="topbar-inner">
        <div className="topbar-inner-name">
          <a href="/">
              <div className="name-header">
              <div class="icons8-adobe-photoshop"></div>
              <span> Pavan Srinivas Mamidala </span>
              </div>
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
            <a href="https://drive.google.com/file/d/1GGaIS_1AtDQXCvjtGECwhWdqlZ8V_vv3/view" target="_blank" rel="noreferrer"> <button onClick>Download CV</button></a>
             
            </div>
        </div>
        </div>
        
    </div>
  );
}
