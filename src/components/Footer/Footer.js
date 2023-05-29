import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className=" bg-dark p-3">
      <div className='d-flex flex-column flex-md-row'>
        <div className='d-flex flex-column align-items-center align-items-md-start col-12 col-md-6 pb-3 pb-md-0 ps-md-3'>
            <h5 className='text-white'>Contacto</h5>
            <a  href="https://wa.me/5493815980535" className='text-white d-flex flex-row links py-1' target='blank'>
              <i class="bi bi-telephone-fill"></i>
              <p className='ps-2 mb-0'>+549 381 5980535</p>             
            </a>
            <a  href="https://www.linkedin.com/in/cristhian-augusto-leal-464313167/" target='_blank' rel="noreferrer" className='text-white d-flex flex-row links py-1'>
              <i class="bi bi-linkedin"></i>
              <p className='ps-2 mb-0'>Cristhian Leal</p>             
            </a>
            <a  href="/" className='text-white d-flex flex-row links py-1'>
              <i class="bi bi-envelope-at"></i>
              <p className='ps-2 mb-0'>cristhianagustoleal@gmail.com</p>             
            </a>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center col-12 col-md-6">
          <a href="/" className='text-white py-md-2 links'>Terminos y condiciones</a>
          <a href="/" className='text-white py-md-2 links'>Politica de privacidad</a>
        </div>
      </div>
        <p className='text-white mb-0 finalText text-md-end text-center py-3 '>CL Solutions, Inc. Todos los derechos reservados. Tucumán, Argentina © 2023.</p>
    </div>
  )
}

export default Footer