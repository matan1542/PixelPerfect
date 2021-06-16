import { useEffect, useState } from "react";
import { useLayoutEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export function Header() {
const [toggle,setToggle] = useState(false);
const [width, height] = useWindowSize();
let matches =(width<800)?false:true;
useEffect(() =>{
if(matches && toggle){
  setToggle(false)
}
},[matches])
const toggleMenu = ()=>{
  setToggle(!toggle);
}
  return (
  <div className="header">
 
      <div className="navbar-header ">
          <h1 className="logo">myTeam</h1>
          {((matches && !toggle )||( toggle && !matches) || matches)&&
          <div className={`navbar-list-href flex `}>
          <div className="left-side flex">
          <ul className="nav-list clean-list flex">
            <li>home</li>
            <li>about</li>
          </ul>
        </div>
        <div className="nav-right-side">
          <button className="contact-btn">Contact us</button>
        </div>
          </div>}
          {!matches && <button onClick={toggleMenu} className="btn btn-open-menu"><i className="fas fa-bars"></i></button>}
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
