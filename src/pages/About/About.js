import React from 'react'
import './about.css'

const Aboutme = () => {
  return (
    <div className='d-flex flex-column flex-lg-row'>
      <div className='d-flex align-content-center justify-content-center col-lg-6 col-12'>
        <img src='https://thumbs.dreamstime.com/b/bonito-hombre-de-negocios-sonriente-con-gafas-gerente-confianza-parado-los-brazos-cruzados-190757851.jpg' alt='About-Me' className='mainimgAbout p-3'/>
      </div>
      <div className='d-flex flex-column align-content-center justify-content-center col-lg-6 col-12 p-3'>
        <h3>
          Cristhian Leal
        </h3>
        <p>
          Electronic engeenier and Full Stack Developer
        </p>
        <h4>
          Some of my skills are :
        </h4>
        <div>
          <div>
            <h5 className='pt-2'>
              -Programming languages, style and markup:
            </h5>
            <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='JavaScript'/>
            <img src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' alt='Python'/>
            <img src='https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white' alt='PowerShell'/>
            <img src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' alt='C'/>
            <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='HTML'/>
            <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='CSS'/>
          </div>
          <div>
            <h5 className='pt-2'>
              -Tools:
            </h5>
            <img src='https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' alt='VSC'/>
            <img src='https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white' alt='JN'/>
            <img src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' alt='Postman'/>
            <img src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' alt='GIT'/>
            <img src='https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white' alt='Versel'/>
            <img src='https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white' alt='Render'/>
          </div>
          <div>
            <h5 className='pt-2'>
              -Libraries, environments and Frameworks:
            </h5>
            <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React'/>
            <img src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' alt='Vite'/>
            <img src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='ReactN'/>
            <img src='https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white' alt='RQ'/>
            <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='RR'/>
            <img src='https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white' alt='RHF'/>
            <img src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' alt='Boot'/>
            <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='Node'/>            
            <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='Express'/>
            <img src='https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white' alt='Django'/>
          </div>
          <div>
            <h5 className='pt-2'>
              -DataBases:
            </h5>
            <img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='Mongo'/>
            <img src='https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white' alt='MSQL'/>
            <img src='https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white' alt='SQLLITE'/>
          </div>
          <div>
            <h5 className='pt-2'>
            -Others:
            </h5>
            <h6>Continuous Improvement(kaizen), RCA analysis, 5S, Agile Methods, Scrum Master</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme