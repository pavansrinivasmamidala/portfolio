import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about-main">
     
        <div className="about-left" data-aos="fade-right">
          <img
            src="https://pavansrinivasmamidala.github.io/pavan.jpg"
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
            <h3>I'm Pavan Srinivas</h3>
            <h5>A rookie aspiring to learn Web Dev based in Canada</h5>
            <p>
              I try to learn HTML and CSS everyday and not make any progress. So
              this is a paragraph and I need to fill it in order for me to add a
              good styling and inevitably it looks good. Ok so now I should just
              right out say that this paragraph is just to flex that I can build
              good designs using HTML and CSS.
            </p>
          </div>

          {/* <div className="about-right-down">
            <h3>PERSONAL INFO</h3>
            <div className="about-right-down-lists">
              <div className="list">
                <ul>
                  <li>
                    <p>
                      <span>Name :</span> Pavan Srinivas Mamidala
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Address :</span> 94 Brimorton Dr
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Email :</span> chinni.mamidala@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Phone :</span> +1 4168548046
                    </p>
                  </li>
                </ul>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <p>
                      <span>Nationality :</span> Indian{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Date of Birth :</span> Aug 25{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Freelance :</span> Available
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Languages :</span> English, Telugu
                    </p>
                  </li>
                </ul>
              </div>
            </div>
           
          </div> */}
        </div>
      </div>
    </div>
  );
}
