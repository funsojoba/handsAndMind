import { useState, useEffect, useRef } from "react"
import { NavBarDiv } from "./style"
import { Link } from "react-router"

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const dropdownRef = useRef(null)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        setActiveDropdown(null)
    }

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null)
        } else {
            setActiveDropdown(dropdownName)
        }
    }

    const closeDropdown = () => {
        setActiveDropdown(null)
    }

    const navigationItems = [
        {
            name: "Home",
            to: "/",
            type: "link"
        },
        {
            name: "About Us",
            to: "/about",
            type: "link"
        },
        {
            name: "Give Help",
            to: "/give-help",
            type: "link"
        },
        {
            name: "Our Programs",
            type: "dropdown",
            items: [
                { name: "Hearts & Home Relief Packages", to: "#" },
                { name: "Reflect & Renew Workshops", to: "#" },
                { name: "Foster Parent Win Spotlight", to: "#" },
                { name: "Hearts & Mind Community Network", to: "#" },
                { name: "Hearts & Mind Brunchin", to: "#" }
            ]
        },
        {
            name: "Heart & Home Relief Package",
            to: "#",
            type: "link"
        },
        {
            name: "Our Community",
            type: "dropdown",
            items: [
                { name: "About Hearts & Mind Brunches", to: "#" }
            ]
        },
        {
            name: "Chapters",
            type: "dropdown",
            items: [
                { name: "Join a Chapter", to: "#" },
                { name: "Start a Chapter", to: "#" }
            ]
        },
        {
            name: "Upcoming Events",
            to: "#",
            type: "link"
        },
        {
            name: "Get Involved",
            type: "dropdown",
            items: [
                { name: "Agencies", to: "#" },
                { name: "Educational Institutions", to: "#" },
                { name: "Volunteer", to: "#" }
            ]
        }
    ]

    return (
        <NavBarDiv className={isScrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/favicon.ico" alt="Hearts & Mind Logo" />
                        {/* <span className="logo-text">Hearts & Mind</span> */}
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-menu desktop-nav">
                    {navigationItems.map((item, index) => (
                        <div key={index} className="nav-item" ref={dropdownRef}>
                            {item.type === 'link' ? (
                                <Link to={item.to} className="nav-link">
                                    {item.name}
                                </Link>
                            ) : (
                                <div className="nav-item-dropdown">
                                    <button 
                                        className={`nav-link dropdown-toggle ${activeDropdown === item.name ? 'active' : ''}`}
                                        onClick={() => toggleDropdown(item.name)}
                                    >
                                        {item.name}
                                        <span className="dropdown-arrow">▼</span>
                                    </button>
                                    {activeDropdown === item.name && (
                                        <div className="dropdown-menu">
                                            {item.items.map((subItem, subIndex) => (
                                                <Link 
                                                    key={subIndex} 
                                                    to={subItem.to} 
                                                    className="dropdown-item"
                                                    onClick={closeDropdown}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                {navigationItems.map((item, index) => (
                    <div key={index} className="mobile-nav-item">
                        {item.type === 'link' ? (
                            <Link 
                                to={item.to} 
                                className="mobile-nav-link"
                                onClick={toggleMobileMenu}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <div className="mobile-dropdown">
                                <button 
                                    className="mobile-dropdown-toggle"
                                    onClick={() => toggleDropdown(item.name)}
                                >
                                    {item.name}
                                    <span className={`mobile-dropdown-arrow ${activeDropdown === item.name ? 'rotated' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {activeDropdown === item.name && (
                                    <div className="mobile-dropdown-menu">
                                        {item.items.map((subItem, subIndex) => (
                                            <Link 
                                                key={subIndex} 
                                                to={subItem.to} 
                                                className="mobile-dropdown-item"
                                                onClick={toggleMobileMenu}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </NavBarDiv>
    )
}

export default NavBar