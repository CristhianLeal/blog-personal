import React, { useRef } from 'react'
import './navbar.css'
import logo from '../../assets/img/logogral.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbarRef = useRef(null)

  const handleLinkClick = () => {
    navbarRef.current.classList.remove('show')
    window.scrollTo(0, 0)
  };

  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img src={logo} alt="Logo" width={120} height={60} className='logo' />
          </a>
          <button className="navbar-toggler text-white links borde" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            Menú
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={navbarRef}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active text-white links" aria-current="page" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link active text-white links" aria-current="page" onClick={handleLinkClick}>
                  About Me
                </Link>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle text-white links" href="/mypages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Pages
                </p>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a className="dropdown-item text-white list" href="/">
                      <Link to='/mypages' className="text-white text-decoration-none sublink" aria-current="page" onClick={handleLinkClick}>
                        Menú Arabe
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white list" href="/">
                      <Link to='/mypages' className="text-white text-decoration-none sublink" aria-current="page" onClick={handleLinkClick}>
                        Rc-Fakestore
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white list" href="/">
                      <Link to='/mypages' className="text-white text-decoration-none sublink" aria-current="page" onClick={handleLinkClick}>
                        Challenges
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link active text-white links" aria-current="page" onClick={handleLinkClick}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;