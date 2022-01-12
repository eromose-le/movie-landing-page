import '../styles/navbar.css';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';
const Navbar = ({ open, setOpen }) => {
  return (
    <div className="navbar">
      <div className="navWrapper">
        <Pulse>
          <img src={Logo} alt="logo" className="navLogo" />
        </Pulse>
        <ul className="navItems">
          <li className="navItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/">
              Plans
            </Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/">
              Blog
            </Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/">
              Sign in
            </Link>
          </li>
          <li className="navItem">
            <Link className="link" to="/">
              Sign Up
            </Link>
          </li>
        </ul>
        {/* Toggler */}
        {open ? (
          <div className="xHamburger" onClick={() => setOpen(!open)}>
            X
          </div>
        ) : (
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
        {/* 2nd menu */}
        <ul
          className="menuItems"
          onClick={() => setOpen(false)}
          style={{ right: open ? '0px' : '-100vw' }}
        >
          <li className="menuItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="menuItem">
            <Link className="link" to="/">
              Plans
            </Link>
          </li>
          <li className="menuItem">
            <Link className="link" to="/">
              Blog
            </Link>
          </li>
          <li className="menuItem">
            <Link className="link" to="/">
              Sign in
            </Link>
          </li>
          <li className="menuItem">
            <Link className="link" to="/">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
