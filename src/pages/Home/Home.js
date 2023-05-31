import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Body = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='d-flex flex-md-row p-4 flex-column '>

      <div className='d-flex align-content-center justify-content-center col-md-6 col-12 '>
        <img src='https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg' alt='PerfilImage' className='mainimg'/>
      </div>

      <div className='maintxt col-md-6 col-12 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center pb-4 mb-0 fs-1'>Hello! My name is Cristhian Leal</h3>
        <h4 className='text-center pb-4 mb-0 fs-1'> Wellcome to my blog!</h4>
        <div className='mb-4'>
          <p className='mb-0 ps-4 pe-1 tv'> Hi everybody, my name is Cristhian Leal and this is my dear blog, in this site i will write a lot of things that i hope that you enjoy. Its easy to think that i'm writing with google traslate, but now it's not the reality. In this blog i will try to show you what i'm learn in my freetime about programming. </p>
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