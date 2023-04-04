import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {


  // const navbar = [
  //   {
  //     link: "/",
  //     name: "Home",
  //   },
  //   {
  //     link: "https://light-in-the-dark-1.gitbook.io/untitled/",
  //     name: "Whitepaper",
  //   },
  //   {
  //     link: "#roadmap",
  //     name: "Roadmap",
  //   },
  //   {
  //     link: "#team",
  //     name: "Team",
  //   },
  //   {
  //     link: "/mint",
  //     name: "Mint",
  //   },
  //   {
  //     link: "#newsletter",
  //     name: "Newsletter",
  //   },
  // ];

  const [activeClass, setActiveClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setActiveClass('scrolled');
      } if (window.scrollY === 0) {
        setActiveClass('');
      }
    });
  }, [])


  return (
    <nav id="navBar" className={`navbar navbar-expand-lg ${activeClass}`}>
      <div className="container">
        <Link className="navbar-brand" to='/'>
          <img src="images/logo.svg" className="img-fluid" alt="MakeMyDapp" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-xl-auto ms-auto ms-xl-0 mb-2 mb-lg-0">
            {/* {navbar.map(({ name, link }) => {
              return (
                <li className="nav-item" key={link}>
                  <Link className="nav-link" to={link}>{name}</Link>
                </li>
              );
            })} */}

            <li className="nav-item">
              <Link className="nav-link" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <HashLink to="/#roadmap" className="nav-link">Roadmap</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#team" className="nav-link">Team</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/pricing'>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <HashLink to="/#newsletter" className="nav-link">Newsletter</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
