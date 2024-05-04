import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Events management application</h3>
            <small className='text-light'>ReactJS | Typescript | Redux toolkit | Firebase | Social login | Google Map API</small>
            <div className="portfolio__item-cta">
              <a href="https://medvent-acf2f.web.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Simple Time Tracking Appliction</h3>
            <small className='text-light'>ReactJS | React Hooks | Firebase | Social login </small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/Thakshila-Bandara/my-resume" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
              <a href="https://medtimetracking.web.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://rassidm.github.io/portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects