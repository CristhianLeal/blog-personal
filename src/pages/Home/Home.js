import React from 'react'
import './home.css'

const Body = () => {
  return (
    <div className='d-flex flex-md-row p-4 flex-column '>
      <div className='d-flex align-content-center justify-content-center col-md-6 col-12 '>
        <img src='https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg' alt='PerfilImage' className='mainimg'/>
      </div>
      <div className='maintxt col-md-6 col-12 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-center pb-4 mb-0 fs-1'>Hello! My name is Cristhian Leal</h3>
        <h4 className='text-center pb-4 mb-0 fs-1'> Wellcome to my blog!</h4>
        <p className='pb-3 mb-0 px-3'> Hi everybody, my name is Cristhian Leal and this is my dear blog, in this site i will write a lot of things that i hope that you enjoy. Its easy to think that i'm writing with google traslate, but now it's not the reality. In this blog i will try to show you what i'm learn in my freetime about programming. </p>
        <a className="btn btn-dark links" href="/">My Blogs</a>
        <img src='https://mattfarley.ca/img/hero-devices.svg' alt='PerfilImage' className='mainimg pt-5'/>
      </div>
    </div>
  )
}

export default Body