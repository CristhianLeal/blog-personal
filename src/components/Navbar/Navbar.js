import React from 'react'
import './navbar.css'
import logo from '../../assets/img/logogral.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky-top'>
      <nav className=" navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img src={logo} alt="Logo" width={120} height={60} className='logo' />
          </a>
          <button className="navbar-toggler text-white links"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            Menú
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/'
                className="nav-link active text-white links" 
                aria-current="page"
                >
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about'
                className="nav-link active text-white links" 
                aria-current="page"
                >
                About Me
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white links" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blogs
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white linksDrop test" href="/">FullStack</a></li>
                  <li><a className="dropdown-item text-white linksDrop test" href="/">Ingeniero Electrónico</a></li>
                  <li><a className="dropdown-item text-white linksDrop test" href="/">Empresa de servicios</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white links" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar