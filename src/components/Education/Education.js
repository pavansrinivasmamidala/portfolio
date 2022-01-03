import "./Education.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


export default function Education() {
  return (
    <div > 
      <div>
        <div className="about-education" id="education">
          <div className="education">
            <h1 data-aos="fade-right" data-aos-duration="1200">My Education & Skills</h1>

            <div className="cards">
              <div className="card" data-aos="fade-right" data-aos-duration="1200"  >
                <h4>
                  <label>Education</label>
                </h4>
                <ul>
                  <li>
                    <span class="year">2021-2023</span>
                    <p>
                      <span>Masters in ITS</span> - Humber College, Toronto,
                      Canada
                    </p>
                  </li>
                  <li>
                    <span class="year">2017-2021</span>
                    <p>
                      <span>Bachelors in CSE</span> - K L University, India
                    </p>
                  </li>
                  <li>
                    <span class="year">2015-2017</span>
                    <p>
                      <span>Intermediate</span> - Bhashyam Junior College
                      
                    </p>
                  </li>
                </ul>
              </div>
              {/* <div className="card" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50">
                <h4>
                  <label>Skills</label>
                </h4>
                <div className="progress-bar" >
                <span>HTML & CSS</span>
                <Progress 
               percent={80}
               width={40}
               theme={{
                   
                active: {
                    color:"black"
                }
               }}
               />
                </div>
                <div className="progress-bar">
                    <span>React JS</span>
                <Progress 
               percent={60}
               
               theme={{
                   
                active: {
                    color:"black"
                }
               }}
               />
                </div>
                <div className="progress-bar">
                    <span>Bash</span>
                <Progress 
               percent={90}
               width={40}
               theme={{
                   
                active: {
                    color:"black"
                }
               }}
               />
                </div>
                <div className="progress-bar">
                    <span>JS</span>
                <Progress 
               percent={50}
               width={40}
               theme={{
                   
                active: {
                    color:"black"
                }
               }}
               />
                </div>
              
              </div> */}
              <div className="card" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <h4>
                  <label>Awards</label>
                </h4>
                <ul>
                  <li>
                    <span class="year">2019</span>
                    <p>
                      <span>Linux Master</span> - #Include 2k19,
                      K L University
                    </p>
                  </li>
                  <li>
                    <span class="year">2020</span>
                    <p>
                      <span>First Prize </span> - Samyak CTF,
                      K L University
                    </p>
                  </li>
                  <li>
                    <span class="year">2019</span>
                    <p>
                      <span>Finalist in Hackathon</span> - HackLeague
                    </p>
                  </li>
                </ul>
              </div>
              <div className="card" data-aos="fade-right" data-aos-duration="1200"  >
                <h4>
                  <label>Certifications</label>
                </h4>
                <ul>
                  <li>
                    <span class="year">Feb 2021</span>
                    <p>
                      <span>CEH </span> - Certified Ethical Hacker, EC-Council
                    </p>
                  </li>
                  <li>
                    <span class="year">Dec 2019</span>
                    <p>
                      <span>RPA Developer   </span>-  UI Path
                    </p>
                  </li>
                  <li>
                    <span class="year"></span>
                    <p>
                      <span></span> 
                      
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
