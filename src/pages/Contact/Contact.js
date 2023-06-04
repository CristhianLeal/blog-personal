import React from 'react'
import './contact.css'
import contact from '../../assets/img/contactnew.jpg'
import what from '../../assets/img/what.png'
import email from '../../assets/img/email.png'
import insta from '../../assets/img/insta.png'
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'


const Contact = () => {
  return (
    <div className='d-flex flex-column flex-md-row general'>

      <div className='d-flex justify-content-center align-items-center col-12 p-3 col-md-6'>
        <img src={contact} alt="Logo" className='imgCont' />
      </div>
      
      <div className='col-12 col-md-6 d-flex flex-wrap p-3 align-items-center justify-content-center'>
        <div className='d-flex flex-row col-10 col-md-12 cards'>
          <a className='linkCont' href='https://wa.me/5493815980535' target='blank'>
            <img src={what} alt="what" className='w-50 p-2' />
            <p className='m-0'>+5493815980535</p>
          </a>
        </div>
        <div className='d-flex flex-row col-10 col-md-12 cards'>
          <a className='linkCont' href='mailto:cristhianaugustoleal@gmail.com' target='blank'>
            <img src={email} alt="email" className='w-50 p-2' />
            <p className='m-0'>
              Email
            </p>
          </a>
        </div>
        <div className='d-flex flex-row col-10 col-md-12 cards'>
          <a className='linkCont' href='https://github.com/CristhianLeal' target='blank'>
            <img src={github} alt="github" className='w-50 p-2' />
            <p className='m-0'>
              GitHub
            </p>
          </a>
        </div>
        <div className='d-flex flex-row col-10 col-md-12 cards'>
          <a className='linkCont' href='https://www.linkedin.com/in/cristhian-augusto-leal-464313167/' target='blank'>
            <img src={linkedin} alt="github" className='w-50 p-2' />
            <p className='m-0'>
              LinkedIn              
            </p>
          </a>
        </div>
        <div className='d-flex flex-row col-10 col-md-12 cards'>
          <a className='linkCont' href='https://www.instagram.com/cristhianleal/' target='blank'>
            <img src={insta} alt="insta" className='w-50 p-2' />
            <p className='m-0'>
              Instagram
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact