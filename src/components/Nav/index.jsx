import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBarDiv } from "./style";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname; // current path without hash

  const navigationItems = [
    { name: "Home", to: "/", type: "link" },
    { name: "About Us", to: "/about", type: "link" },
    { name: "Give Help", to: "/give-help", type: "link" },
    {
      name: "Our Programs",
      type: "dropdown",
      items: [
        { name: "Hearts & Home Relief Packages", to: "/programs#hears-home-relief" },
        { name: "Reflect & Renew Workshops", to: "/programs#reflect-renew-workshop" },
        { name: "Hearts & Mind Community Network", to: "/programs#community-network" },
        { name: "Hearts & Mind Brunchin", to: "/programs#brunchin" }
      ]
    },
    {
      name: "Our Community",
      type: "dropdown",
      items: [{ name: "About Hearts & Mind Brunches", to: "/community#about" }]
    },
    {
      name: "Chapters",
      type: "dropdown",
      items: [
        { name: "Join a Chapter", to: "/chapters#join" },
        { name: "Start a Chapter", to: "/chapters#start" }
      ]
    },
    { name: "Upcoming Events", to: "/events", type: "link" },
    {
      name: "Get Involved",
      type: "dropdown",
      items: [
        { name: "Agencies", to: "/involved#agencies" },
        { name: "Educational Institutions", to: "/involved#education" },
        { name: "Volunteer", to: "/involved#volunteer" }
      ]
    }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (to) => {
    const [path, hash] = to.split("#");
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (hash) scrollToId(hash);
      }, 100);
    } else {
      if (hash) scrollToId(hash);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActiveLink = (to) => {
    const [path] = to.split("#");
    return path === currentPath;
  };

  return (
    <NavBarDiv className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
            <button 
                className="logo-button"
                onClick={() => navigate('/')}
                aria-label="Go to home page"
            >
                <img src="/favicon.ico" alt="Hearts & Mind Logo" />
                {/* <span className="logo-text">Hearts & Mind</span> */}
            </button>
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => item.type === "dropdown" && setActiveDropdown(index)}
              onMouseLeave={() => item.type === "dropdown" && setActiveDropdown(null)}
            >
              {item.type === "link" ? (
                <button
                  className={`nav-link ${isActiveLink(item.to) ? "active" : ""}`}
                  onClick={() => handleNavClick(item.to)}
                >
                  {item.name}
                </button>
              ) : (
                <>
                  <button className="nav-link dropdown-toggle">
                    {item.name}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {activeDropdown === index && (
                    <ul className="dropdown-menu active">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <button
                            className={`dropdown-item ${
                              isActiveLink(subItem.to) ? "active" : ""
                            }`}
                            onClick={() => handleNavClick(subItem.to)}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        {navigationItems.map((item, index) => (
          <div key={index} className="mobile-nav-item">
            {item.type === "link" ? (
              <button
                className={`mobile-nav-link ${isActiveLink(item.to) ? "active" : ""}`}
                onClick={() => handleNavClick(item.to)}
              >
                {item.name}
              </button>
            ) : (
              <>
                <button
                  className="mobile-dropdown-toggle"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                >
                  {item.name}
                  <span
                    className={`mobile-dropdown-arrow ${
                      activeDropdown === index ? "rotated" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {activeDropdown === index && (
                  <div className="mobile-dropdown-menu">
                    {item.items.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className={`mobile-dropdown-item ${
                          isActiveLink(subItem.to) ? "active" : ""
                        }`}
                        onClick={() => handleNavClick(subItem.to)}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </NavBarDiv>
  );
};

export default Nav;
