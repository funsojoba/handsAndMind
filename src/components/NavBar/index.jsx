import { NavBarDiv } from "./style"
import { Link } from "react-router"



const NavBar = ()=>{
    return <NavBarDiv>
        <div className="logo">
            <img src="/favicon.ico" alt="Hearts & Mind Logo" />
        </div>
        <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
        </div>

    </NavBarDiv>
}

export default NavBar