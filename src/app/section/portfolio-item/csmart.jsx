/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2019-10-15 15:21:01
 * @modify date 2019-10-15 15:21:01
 * @desc Portfolio 1: Classmate Portfolio
 */

import React from 'react'

export const Csmart = () => {
  return (
    <div className="portfolio-modal light">
      <div className="module picture" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/mosaic.jpg)`}}>
        <div className="wrapper">
          {/* <h3 className="title" style={{color: '#fff'}}>VMD Lab</h3> */}
          <div className="tags">
            <div className="tag">Web Development</div>
            <div className="tag">Angular</div>
          </div>
        </div>
      </div>
      <div className="module padded">
        <div className="heading">
          <div className="title">CSMART - Swift repairing app</div>
          <div className="desc">
            <span>2017 - 2018</span>
            <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span>Personal Project</span>
          </div>
        </div>
        <p className="text">
          VMDLAB (pronounced V.M.D Lab) is a Modern and Simplistic HTML5 Based Web template. 
          Carefully constructed using latest trends in technology to make it look professional 
          and classy but also user friendly. Suitable for every use case, starting from personal web, 
          company profile, landing page, product description and other cool things.
        </p>
        <p className="text">
          This is my personal project and also a project that i work on, 
          to complete assignment in one of my class back at Vocational School.
        </p>
        
        <div className="actions center">
          <a href='https://github.com/tonyhazama/vmdlab' target='_blank' rel="noopener noreferrer" className="action">
            <i className="fab fa-github" title="View on Github"></i>
          </a>
          <a href='https://tonyhazama.github.io/vmdlab/' target='_blank' rel="noopener noreferrer" className="action">
            <i className="fas fa-globe-asia" title="Live Preview"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
