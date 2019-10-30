/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2019-10-15 15:21:01
 * @modify date 2019-10-15 15:21:01
 * @desc Portfolio 1: Classmate Portfolio
 */

import React from 'react'

export const Trav = () => {
  return (
    <div className="portfolio-modal light">
      <div className="module picture" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/mosaic.jpg)`}}>
        <div className="wrapper">
          <div className="tags">
            <div className="tag">UI / UX</div>
            <div className="tag">Wireframe</div>
          </div>
        </div>
      </div>
      <div className="module padded">
        <div className="heading">
          <div className="title">TRAV - Trip itinerary</div>
          <div className="desc">
            <span>2019</span>
            <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span>Personal Project</span>
          </div>
        </div>
        <p className="text">
          Trav is an Mobile app that focus on helping you planned out your next holiday trip. 
          Trav will help you find the great spot for you to spend your time. A place to eat, 
          place to stay, family destination, romantic place, adventure time, 
          or maybe a beautiful place to take a photos? we got you covered. 
        </p>
        <p className="text">
          A Clean design and responsive interaction, will help you plan the perfect trip you've been dreaming of. 
          Combine that with over 500.000 Destination over the world. 
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque rerum eos, 
          neque dolorum impedit tenetur sit, deleniti soluta amet vitae voluptatibus adipisci incidunt. 
          Ad id odio amet deleniti perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque rerum eos, 
          neque dolorum impedit tenetur sit, deleniti soluta amet vitae voluptatibus adipisci incidunt. 
          Ad id odio amet deleniti perferendis? 
        </p>
        
        <div className="actions center">
          <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-github" title="View on Github"></i></a>
          <a href='https://tonyhazama.github.io/vmdlab/' target='_blank' className="action"><i className="fas fa-globe-asia" title="Live Preview"></i></a>
        </div>
      </div>
    </div>
  )
}
