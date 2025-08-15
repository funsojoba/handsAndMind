import styled from "styled-components";

export const NavBarDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(141, 36, 180, 0.1);
    z-index: 1000;
    transition: all 0.3s ease;
    
    &.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        max-width: 1400px;
        margin: 0 auto;
        height: 70px;
    }

    .logo {
        display: flex;
        align-items: center;
        
        .logo-button {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #8D24B4;
            font-weight: 700;
            font-size: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            
            img {
                width: 40px;
                height: 40px;
                margin-right: 12px;
            }
            
            .logo-text {
                white-space: nowrap;
            }
        }
    }

    /* Desktop Navigation */
    .desktop-nav {
        display: flex;
        align-items: center;
        gap: 5px;

        li{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        @media (max-width: 1024px) {
            display: none;
        }
    }

    .nav-item {
        position: relative;
        
        .nav-link {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 12px 16px;
            color: #333;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            white-space: nowrap;
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            
            &:hover {
                background: rgba(141, 36, 180, 0.1);
                color: #8D24B4;
            }
            
            &.active {
                background: rgba(141, 36, 180, 0.15);
                color: #8D24B4;
            }
        }
        
        .dropdown-toggle {
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            
            .dropdown-arrow {
                font-size: 0.7rem;
                transition: transform 0.3s ease;
            }
            
            &.active .dropdown-arrow {
                transform: rotate(180deg);
            }
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            border: 1px solid rgba(141, 36, 180, 0.2);
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            min-width: 220px;
            padding: 8px 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1001;
            
            .dropdown-item {
                display: block;
                width: 100%;
                padding: 12px 20px;
                color: #333;
                text-decoration: none;
                font-size: 0.9rem;
                transition: all 0.2s ease;
                background: none;
                border: none;
                text-align: left;
                cursor: pointer;
                font-family: inherit;
                
                &:hover {
                    background: rgba(141, 36, 180, 0.1);
                    color: #8D24B4;
                }
            }
        }
        
        &:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-menu {
            &.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 24px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        
        @media (max-width: 1024px) {
            display: flex;
        }
        
        span {
            width: 100%;
            height: 3px;
            background: #8D24B4;
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        &.active {
            span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            span:nth-child(2) {
                opacity: 0;
            }
            
            span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
        }
    }

    /* Mobile Navigation */
    .mobile-nav {
        display: none;
        background: white;
        border-top: 1px solid rgba(141, 36, 180, 0.1);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        
        @media (max-width: 1024px) {
            display: block;
        }
        
        &.open {
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .mobile-nav-item {
            border-bottom: 1px solid rgba(141, 36, 180, 0.1);
            
            .mobile-nav-link {
                display: block;
                width: 100%;
                padding: 16px 20px;
                color: #333;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.2s ease;
                background: none;
                border: none;
                text-align: left;
                cursor: pointer;
                font-family: inherit;
                
                &:hover {
                    background: rgba(141, 36, 180, 0.1);
                    color: #8D24B4;
                }
                
                &.active {
                    background: rgba(141, 36, 180, 0.15);
                    color: #8D24B4;
                }
            }
            
            .mobile-dropdown-toggle {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background: none;
                border: none;
                color: #333;
                font-weight: 500;
                font-size: inherit;
                text-align: left;
                cursor: pointer;
                transition: all 0.2s ease;
                
                &:hover {
                    background: rgba(141, 36, 180, 0.1);
                    color: #8D24B4;
                }
                
                .mobile-dropdown-arrow {
                    font-size: 0.8rem;
                    transition: transform 0.3s ease;
                    
                    &.rotated {
                        transform: rotate(180deg);
                    }
                }
            }
            
            .mobile-dropdown-menu {
                background: rgba(141, 36, 180, 0.05);
                
                .mobile-dropdown-item {
                    display: block;
                    width: 100%;
                    padding: 14px 20px 14px 40px;
                    color: #555;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: all 0.2s ease;
                    border-bottom: 1px solid rgba(141, 36, 180, 0.1);
                    background: none;
                    border: none;
                    text-align: left;
                    cursor: pointer;
                    font-family: inherit;
                    
                    &:hover {
                        background: rgba(141, 36, 180, 0.1);
                        color: #8D24B4;
                    }
                    
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .nav-container {
            padding: 0 15px;
            height: 60px;
        }
        
        .logo a {
            font-size: 1.3rem;
            
            img {
                width: 35px;
                height: 35px;
                margin-right: 10px;
            }
        }
        
        .mobile-nav {
            .mobile-nav-item {
                .mobile-nav-link,
                .mobile-dropdown-toggle {
                    padding: 14px 15px;
                }
                
                .mobile-dropdown-menu .mobile-dropdown-item {
                    padding: 12px 15px 12px 35px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .nav-container {
            padding: 0 10px;
        }
        
        .logo a {
            font-size: 1.2rem;
            
            img {
                width: 30px;
                height: 30px;
                margin-right: 8px;
            }
        }
    }
`;