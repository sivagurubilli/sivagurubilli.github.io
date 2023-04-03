import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
            <img 
							// src='https://github.com/himrd95/portfolio/blob/main/src/assets/logo_new.png?raw=true'
							src='https://cdn.xxl.thumbs.canstockphoto.com/water-liquid-letter-capital-s-liquid-alphabet-gel-series-on-white-background-editable-vector-clipart-vector_csp6777735.jpg'
							alt='Logo'
						/>
            </span>
            <span>Siva Gurubilli</span>
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
