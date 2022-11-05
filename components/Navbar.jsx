import React from "react";
import Image from "next/image";
import foto from "../assets/blueit_logo_cropped.png";
import Link from "next/link";
import style from "../styles/index.module.css"

const Navbar = () => {
  return (
    <div className={style.text}>
    <nav className="navbar navbar-expand-lg  bg-dark  ">
      <div className="container-fluid  ms-5">
        <a className="navbar-brand" href="#">
          <Image src={foto} width="100px" height="40px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse  me-5"
        id="navbarNavDropdown"
      >
       
        <ul className="navbar-nav">
          <Link href="index">
            <a className="nav-item">
              <img src={foto} alt="" width={"200px"} />
            </a>
          </Link>

          <Link href="/">
         <li className="nav-item ">
            <a className="nav-link text-light" href="#">
              Home 
            </a>
          </li>
         </Link>
          <li className="nav-item">
            <Link href="Main/">
              <a className="nav-link text-light" >
                Services
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Blog
            </a>
          </li>
      
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              S.S.S.
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
