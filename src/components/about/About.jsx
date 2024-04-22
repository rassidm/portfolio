import React from 'react'
import './about.css'
import myImage from '../../assets/me.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>M.Eng Software Engineering <br /><i>IMT-Mines Ales.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.13</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Software Architecture and Design</li>
                      <li>Full-Stack Software Development</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Multi‑disciplined and energetic <b>Software Engineer</b> committed to delivering business results that leverage cutting‑edge ideas and technology. Passionate about Software architecture, continuous innovation. Highly adept at building teams and driving results in complex and chaotic environments, with a history of delivery successes.
                    
            </p>

          </div>
      </div>
    </section>
  )
}



export default About