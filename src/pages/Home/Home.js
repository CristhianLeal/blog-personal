import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import home from '../../assets/img/homenew.jpg'

const Body = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='d-flex flex-md-row p-4 flex-column '>
      <div className='d-flex align-items-center justify-content-center col-md-6 col-12 '>
        <img src={home} alt='PerfilImage' className='mainimg'/>
      </div>
      <div className='maintxt col-md-6 col-12 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center pb-4 mb-0 fs-1'>Hello! My name is Cristhian Leal</h3>
        <h4 className='text-center pb-4 mb-0 fs-1'> Wellcome to my Portfolio!</h4>
        <div className='mb-4'>
          <p className='mb-0 ps-4 pe-1 tv'> Hello everyone, on this website i want to show you some of the projects i worked on and some of my work experiences. I am an <strong>Electronic engineer</strong> with experience in continuous improvements and a <strong>Full stack developer</strong>, currently working as a freelance developer. If you have some questions just contact me! Thanks for viewing my portfolio! </p>
        </div>
        <div className='d-flex flex-row justify-content-start gap-2'>
          <a className="btn btn-dark links" href="/">
            <Link to='/mypages'
              className="nav-link active text-white" 
              aria-current="page"
              onClick={handleLinkClick}
              >
              My Pages
            </Link>
          </a>
          <a className="btn btn-dark links" href="/">
            <Link to='/about'
              className="nav-link active text-white" 
              aria-current="page"
              onClick={handleLinkClick}
              >
              About Me
            </Link>
          </a>
          <a className="btn btn-dark links" href="/">
            <Link to='/contact'
              className="nav-link active text-white" 
              aria-current="page"
              onClick={handleLinkClick}
            >
              Contact me
            </Link>
          </a>
        </div>
        <img src='https://mattfarley.ca/img/hero-devices.svg' alt='PerfilImage' className='mainimg pt-3'/>
      </div>
      
    </div>
  )
}

export default Body