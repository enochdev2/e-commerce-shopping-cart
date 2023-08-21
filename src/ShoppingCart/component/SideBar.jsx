import React, {useState} from 'react'
import { SideBarData } from "./SideBarData";
import {Link} from 'react-router-dom';



const SideBar = ({sideBar}) => {


  return (

    <div className={sideBar?'sideBar-active':'sideBar'}>
      {SideBarData.map((data,index)=>{
        const {page, links} = data;
      return (
        <article>
        
        {links.map((link,index)=>{
          const {url,label,icon} = link;
          return( <li key={index}>
            <Link to={url}>
              <span className='icon'>{icon}</span>
              {label}
            </Link>
          </li>
          )
        })}
      </article>
      ) 

     
      })}
    </div>
  )
}

export default SideBar
