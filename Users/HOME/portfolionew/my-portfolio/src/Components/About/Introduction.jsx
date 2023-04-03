import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
          A  bit  About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src="https://github.com/sivagurubilli/my-portfoliobuilding/blob/master/siva%20profile.jpeg?raw=true" alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I am{" "}
                <span className="different">Siva Gurubilli,</span>  24 years old Web Developer,
                currently living in {" "}
                <span className="different">
                  {" "}
              Kakinada, Andhra Pradesh (India).
                </span>
                <br/>
                I am a disciplined, focused, flexible and goal-oriented FullStack Web Developer with knowledge of MERN Stack along with a knack of building applications.
{" "}
                <span className="different">
                
                </span>
                Currently seeking opportunities to leverage technical and problem-solving skills to create scalable, dynamic, and high-speed websites.
{" "}
               
              </h4>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
