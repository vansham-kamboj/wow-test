import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoLight from '../images/logo-darkBg.png'; // Light version of the logo
import logoDark from '../images/logo-lightBg.png'; // Dark version of the logo

function CustomNavbar() {
  const [showShadow, setShowShadow] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [logoSrc, setLogoSrc] = useState(logoLight); // Initial logo source
  const [fontColor, setFontColor] = useState('white'); // Initial font color
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCoachingDropdown, setShowCoachingDropdown] = useState(false);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

    // Check if the current pathname is "/services" to change navbar colors


    
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (!isMobileView) {
        if (scrollPosition > 100) {
          setShowShadow(true);
          setNavbarBg('white'); // Set background color to white on scroll
          setLogoSrc(logoDark);
          setFontColor('black');
        } else {
          setShowShadow(false);
            setNavbarBg('transparent');
            setLogoSrc(logoLight);
            setFontColor('black');

        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Detect if the viewport width is less than a certain size (e.g., mobile view)
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust this value according to your design
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView],[location]) ;



  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const toggleCoachingDropdown = () => {
    setShowCoachingDropdown(!showCoachingDropdown);
  };

  const toggleCountriesDropdown = () => {
    setShowCountriesDropdown(!showCountriesDropdown);
  };

  return (
    <Navbar className={`px-5 ${showShadow ? 'shadow-nav' : ''}`} style={{ backgroundColor: navbarBg, color: fontColor, transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease', backdropFilter: isMobileView && showShadow ? 'blur(10px)' : 'none' }} expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img src={logoSrc} alt="Logo" width="80" /> {/* Use dynamic logo source */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="" >
            <Link to="/" className='text-decoration-none' style={{ color: showShadow ? 'black' : 'white' }}>Home</Link>
          </Nav.Link>
          <Nav.Link href="#services" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown} className="nav-link" style={{ color: showShadow ? 'black' : 'white' }}>
            <Link to="/services" className='text-decoration-none' style={{ color: showShadow ? 'black' : 'white' }}>Services</Link>
            {showServicesDropdown && (
              <div className="dropdown-menu">
                <Nav.Link href="/">Action</Nav.Link>
                <Nav.Link href="#action/3.2">Another action</Nav.Link>
                <Nav.Link href="#action/3.3">Something</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Nav.Link href="/services" onMouseEnter={toggleCoachingDropdown} onMouseLeave={toggleCoachingDropdown} className="nav-link" style={{ color: showShadow ? 'black' : 'white' }}>
            Coaching
            {showCoachingDropdown && (
              <div className="dropdown-menu">
                <Nav.Link href="#action/3.1">Action</Nav.Link>
                <Nav.Link href="#action/3.2">Another action</Nav.Link>
                <Nav.Link href="#action/3.3">Something</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Nav.Link href="#countries" onMouseEnter={toggleCountriesDropdown} onMouseLeave={toggleCountriesDropdown} className="nav-link" style={{ color: showShadow ? 'black' : 'white' }}>
            Countries
            {showCountriesDropdown && (
              <div className="dropdown-menu">
                <Nav.Link href="/USA">USA</Nav.Link>
                <Nav.Link href="/Canada">CANADA</Nav.Link>
                <Nav.Link href="#action/3.3">UK</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Button variant="primary" style={{ color: showShadow ? 'black' : 'white' }} className="ml-2 border-secondary bg-transparent">Inquire Now</Button>
        </Nav>
      </Navbar.Collapse>
      <style>
        {`
          .nav-link:hover {
            
          }
          .shadow-nav {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .dropdown-menu {
            display: block;
            position: absolute;
            background-color: white;
            z-index: 1000;
            margin-top: 5px;
          }
          .dropdown-menu a {
            color: black;
            padding: 10px;
            text-decoration: none;
          }
          .dropdown-menu a:hover {
            background-color: #f8f9fa;
          }
        `}
      </style>
    </Navbar>
  );
}

export default CustomNavbar;
