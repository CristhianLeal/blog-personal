import React from 'react'
import './contact.css'
import logo from '../../assets/img/logogral.png'

const Contact = () => {
  return (
    <div className='d-flex flex-column flex-sm-row general'>

      <div className='col-6 p-3'>
        <img src={logo} alt="Logo" className='w-50' />
      </div>
      
      <div className='col-6 d-flex flex-column p-3'>
        <div className='d-flex flex-row col-3'>
          <img src={logo} alt="Logo" className='w-50' />
          <a href='/'>Enlace</a>
        </div>
        <div className='d-flex flex-row col-3'>
          <img src={logo} alt="Logo" className='w-50' />
          <a href='/'>Enlace</a>
        </div>
        <div className='d-flex flex-row col-3'>
          <img src={logo} alt="Logo" className='w-50' />
          <a href='/'>Enlace</a>
        </div>
        <div className='d-flex flex-row col-3'>
          <img src={logo} alt="Logo" className='w-50' />
          <a href='/'>Enlace</a>
        </div>
      </div>
    </div>
  )
}

export default Contact