import { useState, useEffect, useRef } from "react"
import { NavBarDiv } from "./style"
import { useLocation, useNavigate } from "react-router-dom"
import { scrollToSection } from "../../utils/scrollToSection"



const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const dropdownRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()

    // Function to check if a navigation item is active
    const isActiveRoute = (itemPath) => {
        if (!itemPath) return false
        return location.pathname === itemPath
    }

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

    // const handleNavigation = (path) => {
    //     console.log('Navigating to:', path)
    //     closeDropdown()
    //     toggleMobileMenu()
    //     navigate(path)
    // }

    const handleNavigation = (path) => {
    closeDropdown()
    toggleMobileMenu()

    const [pathname, hash] = path.split("#")

    if (location.pathname === pathname) {
        // Already on the target page → scroll directly
        if (hash) scrollToSection(hash)
    } else {
        // Navigate to a different page
        navigate(pathname)

        if (hash) {
            // Wait for the new page to render, then scroll
            setTimeout(() => {
                scrollToSection(hash)
            }, 200)
        }
    }
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
            to: "/programs",
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
                { name: "Join a Chapter", to: "/chapters#join" },
                { name: "Start a Chapter", to: "/chapters#start" }
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
                    <button 
                        className="logo-button"
                        onClick={() => navigate('/')}
                        aria-label="Go to home page"
                    >
                        <img src="/favicon.ico" alt="Hearts & Mind Logo" />
                        {/* <span className="logo-text">Hearts & Mind</span> */}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-menu desktop-nav">
                    {navigationItems.map((item, index) => (
                        <div key={index} className="nav-item">
                            {item.type === 'link' ? (
                                <button 
                                    className={`nav-link ${isActiveRoute(item.to) ? 'active' : ''}`}
                                    onClick={() => handleNavigation(item.to)}
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <div className="nav-item-dropdown" ref={dropdownRef}>
                                    <button 
                                        className={`nav-link dropdown-toggle ${activeDropdown === item.name ? 'active' : ''}`}
                                        onClick={() => toggleDropdown(item.name)}
                                    >
                                        {item.name}
                                        <span className="dropdown-arrow">▼</span>
                                    </button>
                                    {activeDropdown === item.name && (
                                        <div className="dropdown-menu active">
                                            {item.items.map((subItem, subIndex) => (
                                                <button 
                                                    key={subIndex} 
                                                    className="dropdown-item"
                                                    onClick={() => handleNavigation(subItem.to)}
                                                >
                                                    {subItem.name}
                                                </button>
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
                            <button 
                                className={`mobile-nav-link ${isActiveRoute(item.to) ? 'active' : ''}`}
                                onClick={() => handleNavigation(item.to)}
                            >
                                {item.name}
                            </button>
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
                                            <button 
                                                key={subIndex} 
                                                className="mobile-dropdown-item"
                                                onClick={() => handleNavigation(subItem.to)}
                                            >
                                                {subItem.name}
                                            </button>
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