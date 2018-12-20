import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Certification from "./certification";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{ paddingTop: "20px" }}>Eugene Butenko</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Highly motivated, love to code, being coding as my a hobby for a
              year, now I'm looking forward and want to turn my hobby into my
              profession. We live in the age when technology is changing so
              fast. I believe knowing something not that important, more
              important part is to be able to learn new things and be open for
              changes!!! "Live&Study as if you were to die tomorrow. Learn as if
              you were to live forever." Mahatma Gandhi
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>821C Westwood Ave, Bethany Beach, DE, 19970, United States</p>
            <h5>Phone</h5>
            <p>+1 (302) 430-1160</p>
            <h5>Email</h5>
            <p>eugene.bb@hotmail.com</p>
            <h5>LinkedIn</h5>
            <p>
              <a href="https://www.linkedin.com/in/yevhenii-butenko/">
                <i
                  style={{ fontSize: "50px", color: "#0077B5" }}
                  className="fa fa-linkedin"
                />
              </a>
            </p>
            <h5>GitHub</h5>
            <p>
              <a href="https://github.com/JoeVincentt">
                <i
                  style={{ fontSize: "50px", color: "purple" }}
                  className="fa fa-github"
                />
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Certification</h2>

            <Certification
              resource={"edX"}
              schoolName="Microsoft Certification:"
              schoolDescription={
                <ul>
                  <li>Python: Absolute Beginner</li>
                  <li>Python: Fundamentals</li>
                  <li>Logic and Computational Thinking</li>
                  <li>Designing a Technical Solution</li>
                  <li>Building Interactive Prototypes using JavaScript</li>
                  <li>Building Functional Prototypes using Node.js</li>
                  <li>Learn to Program in Java</li>
                  <li>Code Objects and Algorithms</li>
                  <li>Building Interactive Prototypes using JavaScript</li>
                  <li>Building Functional Prototypes using Node.js</li>
                  <li>Designing a Technical Solution</li>
                  <li>Code Solutions</li>
                  <li>Computer Science</li>
                </ul>
              }
            />

            <Certification
              resource={"Udemy"}
              schoolName="Online Certification:"
              schoolDescription={
                <ul>
                  <li>
                    React 16.6 - The Complete Guide (incl. React Router & Redux)
                  </li>
                  <li>React Front To Back</li>
                  <li>Modern JavaScript From The Beginning</li>
                  <li>Node.js, Express & MongoDB Dev to Deployment</li>
                </ul>
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            {/* <h2>Experience</h2> */}

            {/* <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} /> */}
            <h2>Skills</h2>
            <Skills skill="React" progress={80} />
            <Skills skill="Redux" progress={80} />
            <Skills skill="JavaScript" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="MongoDB" progress={50} />
            <Skills skill="Python" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
