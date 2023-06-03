import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <a  href="https://wa.me/5493815980535" className='text-dark d-flex flex-row links py-1 size' target='blank'>
        <i class="bi bi-telephone-fill "></i>
        <p className='ps-2 mb-0 '>+549 381 5980535</p>             
      </a>
      <a  href="https://www.linkedin.com/in/cristhian-augusto-leal-464313167/" target='_blank' rel="noreferrer" className='text-dark d-flex flex-row links py-1 size'>
        <i class="bi bi-linkedin"></i>
        <p className='ps-2 mb-0'>Cristhian Leal</p>             
      </a>
      <a  href="/" className='text-dark d-flex flex-row links py-1 size'>
        <i class="bi bi-envelope-at"></i>
        <p className='ps-2 mb-0'>cristhianaugustoleal@gmail.com</p>             
      </a>
      <a  href="https://github.com/CristhianLeal" className='text-dark d-flex flex-row links py-1 size'>
        <i class="bi bi-github"></i>
        <p className='ps-2 mb-0'>GitHub</p>             
      </a>
    </div>
  )
}

export default Contact