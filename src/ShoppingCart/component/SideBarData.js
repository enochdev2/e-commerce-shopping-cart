import React from 'react'
import {FaCreditCard,FaBook, FaBriefcase }  from 'react-icons/fa';

export const SideBarData = [
    {
        page: 'products',
        links: [
            {
             label:'payment',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
             label:'terminal',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
             label:'Connect',
             icon: <FaCreditCard/>,
             url: '/products'
            },
            {
                label:'help',
                icon: <FaBook/>,
                url: '/products'
            },
            {
             label:'billing',
             icon: <FaBook/>,
             url: '/products'
            },
        ],
    },
    {
        page: 'company',
        links: [
            {
             label:'about',
             icon: <FaBriefcase/>,
             url: '/products'
            },
            {
             label:'customer care',
             icon: <FaBriefcase/>,
             url: '/products'
            },       
        ],
    },
                                   
] 
 

