import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/p1.png";
import L_MernTipCalc from "../../assets/img/projects/p2.jpg";
import L_GetGitHubInfo from "../../assets/img/projects/p3.png";
import L_SmartBrain from "../../assets/img/projects/p4.png";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_EXPRESSJS from "../../assets/img/skills/express.svg"
import L_NODEJS from "../../assets/img/skills/nodejs.svg"
import L_REACTJS from "../../assets/img/skills/react.svg"
import L_REACT from "../../assets/img/projects/tf.png";
import L_NODE_JS from "../../assets/img/projects/new-php-logo.svg";
import L_EXPRESS from "../../assets/img/skills/mysql-ar21.svg";
import L_POSTGRESQL from "../../assets/img/skills/mongodb.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/projects/android-logo.svg";
import L_CSS3 from "../../assets/img/projects/ml.png";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/projects/sqlite-ar21.svg";
import "./projects-timeline.styles.css";


const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="May 2018"
            className="text-center"
            text="Employee Management System"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app allows you to view individual employee records in detail. To store the record of large number of employee. To decrease the workforce. Simplify the task of maintaining records and is user friendly in nature.
                        <hr />
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Both employees & the administrator can login to this system & work but with some restrictions. Thus, provides high accessing security. </li>
                          <li>Powered by React and Material UI</li>
                          <li>Respoisive Design</li>
                        </ul> */}
                        {/* <hr /> */}
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Android
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                          SQLite
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://github.com/thakkarpurvesh/Employee-Management-System"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/thakkarpurvesh/Employee-Management-System"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>


{/* Project: MERN Tip Calculator */}
<ImageEvent
            date="May 2020"
            className="text-center"
            text="Online Medicine Shop"
            src={L_MernTipCalc}
            alt="MERN Tip Calculator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> By using this app, Customer can buy medicine online and get it delivered right to your doorsteps.
                        This apps also offer great discounts and other incentives like free shipping.
                        <hr />
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter amount upto your desire</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with  Material-UI</li>
                        </ul>
                        <hr /> */}
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Android"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Android
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://github.com/akjha96/MernTipCaculator-FrontEnd"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-nodejs-expressjs-activity-6712281977107603456-oH6t"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: Object Detection Application */}
          <ImageEvent
            date="Nov 2020"
            className="text-center"
            text="Object Detection Application"
            src={L_GetGitHubInfo}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> “Object Detection application” identifies the bird by mapping the image with pretrained models and it gives the classifications of that.
                        This application is generally used by tourists, explorers or any person wants to identify the bird by just giving an input image to the application.
                        <hr />
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search any Github profile</li>
                          <li>Real-time API calls</li>
                        </ul>
                        <hr /> */}
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="Android"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Android
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="ML Kit"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ML Kit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="TensorFlow Lite"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              TensorFlow
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/getGithubInfo/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/getGithubInfo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

          {/* Project: Covid Case Tracker */}
          <ImageEvent
            date="On-Going"
            className="text-center"
            text="Covid Case Tracker"
            src={L_SmartBrain}
            alt="Covid Case Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The main purpose for developing this project is to analyze the Coronavirus Cases, Deaths, Recovered, etc.
                        <hr />
                        {/* <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>Keep tracks of entries for each user</li>
                        </ul>
                        <hr /> */}
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACTJS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODEJS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESSJS}
                                alt="Express.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                        {/* <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or{" "}
                          <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://covidcasetracker-web.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {/* <UrlButton
                  href="https://github.com/akjha96/Smart_Brain"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=ZZYSpi_blL0"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

         
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
