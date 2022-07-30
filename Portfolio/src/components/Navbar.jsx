import React, {useRef,useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Navbar = ()=>{
    return (
        <div className="Navbar">
            <ul>
                <li className='navlink'><Link to="/#about">About Me</Link></li>
                <li className='navlink'><Link to="/#projects">Projects</Link></li>
                <li className='navlink'><Link to="/#contact">Contact</Link></li>
            </ul>
            

        </div>
    )
}

export default Navbar