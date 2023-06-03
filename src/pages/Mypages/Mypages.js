import React from 'react'
import './mypages.css'
import menu from '../../assets/img/menu-arabe.png'
import rcfake from '../../assets/img/rc-fakestore.png'
import Buttons from '../../assets/img/Buttons.png'
import Portfolio from '../../assets/img/Portfolio.png'

const Mypages = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center'>

      <div className="blog-card m-2">
        <div className="meta">
          <img src={menu} alt="menu" className='photo' />
          <ul className="details ">
            <li><a className='enlace' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> WebSite</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/nestor-labiuk/menu-arabe"><i class="bi bi-github"> GitHub-Front</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/nestor-labiuk/menu-arabe-api"><i class="bi bi-github"> GitHub-Back</i></a></li>
          </ul>
        </div>
        <div className="description">
          <h3><a className='enlacetitle' target='blank' href="https://menu-arabe.vercel.app/">Arabian Restaurant</a></h3>
          <p className='pt-4'>The objective of this proyect was create a page ( Frontend + API + Database) able to create,edit, delete, and get menus, orders and users that was save on mongoDb.</p>
          <p className=''><span style={{ textDecoration: 'underline' }}>Main Tecnologies</span>: Javascript, React, Node, Express, Bootstrap, MongoDb.</p>
          <p className="read-more">
            <a className='enlacegrl' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card alt m-2">
        <div className="meta">
          <img src={rcfake} alt="rcfake" className='photo' />
          <ul className="details ">
            <li><a className='enlace' target='blank' href="https://rc-fakestore.vercel.app/"><i class="bi bi-globe"> WebSite</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/CristhianLeal/practicafakestore"><i class="bi bi-github"> GitHub-Front</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/CristhianLeal/Repo-back-fake"><i class="bi bi-github"> GitHub-Back</i></a></li>
          </ul>
        </div>
        <div className="description">
          <h3><a className='enlacetitle' target='blank' href="https://rc-fakestore.vercel.app/">Fake Store</a></h3>
          <p className='pt-4'>The mian goal of this proyect was create a page ( Frontend + API + Database) able to create,edit, delete, and get users and buy products that was save on <a className='text-dark' style={{ textDecoration: 'none'}} target='blank' href="https://fakestoreapi.com/"><b>Fake Strore API</b></a></p>
          <p className=''><span style={{ textDecoration: 'underline' }}>Main Tecnologies</span>: Javascript, React, Node, Express, Bootstrap, MongoDb.</p>
          <p className="read-more">
            <a className='enlacegrl' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card m-2">
        <div className="meta">
          <img src={Buttons} alt="Buttons" className='photo' />
          <ul className="details ">
            <li><a className='enlace' target='blank' href="https://github.com/CristhianLeal/total-coin-front"><i class="bi bi-github"> GitHub-Front</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/CristhianLeal/total-coin-api"><i class="bi bi-github"> GitHub-Back</i></a></li>
          </ul>
        </div>
        <div className="description">
          <h3><a className='enlacetitle' target='blank' href="https://github.com/CristhianLeal/total-coin-front">Challenge Buttons</a></h3>
          <p className='pt-4'> This project was an interview challenge, the main objective was to make the frontend and the backend able to create and delete buttons. These buttons can count and display the clicks made on it.</p>
          <p className=''><span style={{ textDecoration: 'underline' }}>Main Tecnologies</span>: Javascript, Vite, Node, Express, Bootstrap, SQL Server.</p>
          <p className="read-more">
            <a className='enlacegrl' target='blank' href="https://github.com/CristhianLeal/total-coin-front"><i class="bi bi-globe"> Visit the Repository</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card alt m-2">
        <div className="meta">
          <img src={Portfolio} alt="Portfolio" className='photo' />
          <ul className="details ">
            <li><a className='enlace' target='blank' href="hhttps://my-portfolio-cl.vercel.app/"><i class="bi bi-globe"> WebSite</i></a></li>
            <li><a className='enlace' target='blank' href="https://github.com/CristhianLeal/blog-personal"><i class="bi bi-github"> GitHub-Front</i></a></li>
          </ul>
        </div>
        <div className="description">
          <h3><a className='enlacetitle' target='blank' href="https://my-portfolio-cl.vercel.app/">Portfolio</a></h3>
          <p className='pt-4'> This page aims to show my main projects, the purpose of it is to demonstrate my skills as a full stack developer. Pages, repositories and deployments will be displayed here.</p>
          <p className=''><span style={{ textDecoration: 'underline' }}>Main Tecnologies</span>: Javascript, Vite, Bootstrap, HTLM, CSS</p>
          <p className="read-more">
            <a className='enlacegrl' target='blank' href="https://my-portfolio-cl.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Mypages