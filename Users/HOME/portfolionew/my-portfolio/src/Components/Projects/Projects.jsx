import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
export const Projects = () => {
  return (
    <>


      <div className='section'>
        <h2 className='section__title different'>Projects</h2>
        <div className='allProjects'>
        <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://github.com/sivagurubilli/fraazo-clone/blob/master/frontend/Screenshot%20(231).png?raw=true'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Fraazo   Online Grocery Shopping Store</h2>
                <p>
                Buying fresh fruits, vegetables, herbs, and dry fruits online is easy with Fraazo.
                Daily usage groceries are available on the platform with the best price, and users can place the order and receive it within three hours.


                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <SiRedux />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <FaNodeJs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href='https://fraazo-guru.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/sivagurubilli/fraazo-clone'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://github.com/sivagurubilli/hotel-bookingapp/blob/main/client1/Screenshot%20(224).png?raw=true'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Guru Hotel Reservation Application</h2>
                <p>
                Guru Booking is an online hotel booking service. Users can search for hotels based on their location.
 
 Rooms in that hotel can be reserved based on availability.
 Rooms are Reserve on first come first serve basis only

               
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <FaNodeJs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href='https://gurubooking.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/sivagurubilli/hotel-bookingapp'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://github.com/sivagurubilli/Maxfashion-website-clone-react-redux/blob/master/Screenshot%20(189).png?raw=true'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Maxfashion     <br /> E-Commerce Website</h2>
                <p>
                Maxfashion is an E-commerce website where users can shop in different segments like men's wear, 
                women's wear and kid's wear in different variety of clothes based on various price ranges and sizes.
                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <FaNodeJs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href='https://maxfashion33.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/sivagurubilli/Maxfashion-website-clone-react-redux/tree/master'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src="https://github.com/sivagurubilli/my-portfoliobuilding/blob/master/Screenshot%20(192).png?raw=true" />
                </div>
              </div>
              <div className='project_information'>
                <h2>Revv Car Rental Services</h2>
                <p>
                Revv car rental services provide online car rental services. 
                Users can own a car without buying one. In a selected city, users can search for all available cars,
                 choose the desired car in their budget range, and subscribe to that car by paying a subscription fee.

                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  
                </div>
                <div>
                  <a
                    href='https://revv-car-rentalsclone.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/sivagurubilli/revv-web-clone.git'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
             
        
        </div>
      </div>
    </>
  );
};
