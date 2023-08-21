import React, {useContext} from 'react';
import {BsCart4} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AppContext } from "./ContextProvider";
import { SideBarData } from "./SideBarData";
import './NavBar.css';


const NavBar = ({sideBar,setSideBar}) => {
  const information = useContext(AppContext);
  const {state,dispatch} = information;

  return (
    <div className='navbar'>
      <FaBars className="menu" onClick={()=> setSideBar(!sideBar)}/>
      <div className="nav-link">
  
        <Link to="/">Shop </Link>
        <span className='notice-container'>
          {state.length > 0 &&
        <span className="notice"> {state.length}
        </span>
          }
        <Link to="/Cart"><BsCart4 style={{fontSize:'2.5rem'}} /> </Link>
        </span>
        <span>
        <Link to="/About">About</Link>
        </span>
        <span>
        <Link to="/contact" className='contact'>Customer Care</Link>      
        </span>
      </div>
    </div>
  )
}

export default NavBar
