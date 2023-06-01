import React from 'react'
import './mypages.css'
import menu from '../../assets/img/menu-arabe.png'
import rcfake from '../../assets/img/rc-fakestore.png'

const Mypages = () => {
  return (
    <div className='d-flex flex-wrap'>

      <div className="blog-card">
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
          <p className='pt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <a className='enlace' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card alt">
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
          <p className='pt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <a className='enlace' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card">
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
          <p className='pt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <a className='enlace' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

      <div className="blog-card alt">
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
          <p className='pt-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
          <p className="read-more">
            <a className='enlace' target='blank' href="https://menu-arabe.vercel.app/"><i class="bi bi-globe"> Visit the WebSite</i></a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Mypages