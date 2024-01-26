import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    const handleChatBtnClick = () => {
        if(!isButtonDisabled) {
            toast.info("Experiencing high traffic. Please try again later.", {
                position: toast.POSITION.TOP_CENTER,
                onOpen: () => setIsButtonDisabled(true),
                onClose: () => setIsButtonDisabled(false),
            });
        }
    }
    return (
        <div className="navbar-section">
          <h1 className='navbar-title'>
            <link to='/' >
              Health<span className="navbar-sign">+</span>
            </link>
          </h1>
          {/*Desktop Navbar*/}
          <ul className="navbar-items">
            <li>
                <Link to="/" classNam="navbar-links">
                    Home
                </Link>
            </li>
            <li>
                <a href="#services" classNam="navbar-links">
                    Services
                </a>
            </li>
            <li>
                <a href="#about" classNam="navbar-links">
                    About
                </a>
            </li>
            <li>
                <a href="#reviews" classNam="navbar-links">
                    Reviews
                </a>
            </li>
            <li>
                <a href="#doctor" classNam="navbar-links">
                    Doctors
                </a>
            </li>
            </ul>

        </div>

        

      )
}
export default Navbar;