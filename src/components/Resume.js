import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section" id="resume">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>Know More</span>
                <h3>My Resume</h3>
                <p>
                  I enjoy every step of the Development Process, from Requirement gathering, Design, Implementation
                  to Maintenance.
                </p>
              </div>
              <div className="content_inner" style={{width: '100%'}}>
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                  <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Software Engineer</h3>
                              <span>Sales At Work</span>
                            </div>
                            <div className="right">
                              <span>2021 - Present</span>
                            </div>
                          </div>
                          <div className="text">
                            <p style={{marginBottom: '16px'}}>Developed and maintained cross-platform mobile applications using React Native and Xamarin.Forms framework.</p>
                            <p style={{marginBottom: '16px'}}>Deployed and managed three mobile apps on Appstore and Google Play Store.</p>
                            <p style={{marginBottom: '16px'}}>Developed and maintained web applications using React.js, Vue.js and .NET Core.</p>
                            <p style={{marginBottom: '16px'}}>Designed and implemented responsive user interfaces using HTML5, CSS, tailwind and Vue.js, React.js components and libraries.</p>
                            <p style={{marginBottom: '16px'}}>Created user interfaces, wireframes, and prototypes using design tools like Figma.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                  <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Master of Information Technology</h3>
                              <span>Monash University</span>
                            </div>
                            <div className="right">
                              <span>2019 - 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p style={{marginBottom: '16px'}}>
                              Gained immense knowledge by exploring a wide range of areas, such as software engineering,
                              mobile, and distributed systems, project management, computer Security, and UIUX.
                            </p>
                            <p style={{marginBottom: '16px'}}>
                              Worked in a team with industry mentors to develop an entrepreneurial IT solution.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Bachelor of Computer Engineering</h3>
                              <span>Mumbai University</span>
                            </div>
                            <div className="right">
                              <span>2014 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Built the foundations for my IT carrier by exposing myself to various disciplines of IT, including digital communications, 
                              Software development, Object-Oriented Programming, Relational Databases, Computer Networks, Mobile Communications, Artificial Intelligence, 
                              Machine Learning and Cloud Computing.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Resume;
