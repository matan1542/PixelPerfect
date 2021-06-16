import { useState } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Header() {
const [toggle,setToggle] = useState(false);
const matches = useMediaQuery('(min-width:800px)');
  return (
  <div className="header">
 
      <div className="navbar-header ">
        <div className="logo-side flex">
          <h1 className="logo">myTeam</h1>
          <ul className="nav-list clean-list flex">
            <li>home</li>
            <li>about</li>
          </ul>
        </div>
        <div className="nav-right-side">
          <button className="contact-btn">Contact us</button>
        </div>
      </div>

      <div className="header-container">
     {matches&& <img src="imgs/combined-shape.png" alt="img" className="shape" />}

          <div className="header-headline flex">
              <h2>Find the best <span className="talent">talent</span></h2>
          </div>
          <div className="header-content-container">
              <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>

      </div>
    </div>
  );
}
