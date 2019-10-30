import React, { Component } from 'react'

export const PortfolioItem = ({ title, detail: { time, client }, tags, desc}) => {
  return (
    <div className="portfolio-modal light">
      <div className="module picture" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/mosaic.jpg)`}}>
        <div className="wrapper">
          {/* <h3 className="title" style={{color: '#fff'}}>VMD Lab</h3> */}
          <div className="tags">
            {tags.map(tag => (<div className="tag">{tag}</div>))}
          </div>
        </div>
      </div>
      <div className="module padded">
        <div className="heading">
          <div className="title">{title}</div>
          <div className="desc">
            <span>{time}</span>
            <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span>{client}</span>
          </div>
        </div>
        { desc.map(text => (<p className="text">{text}</p>)) }
        <div className="actions center">
          <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-github" title="View on Github"></i></a>
          <a href='https://tonyhazama.github.io/vmdlab/' target='_blank' className="action"><i className="fas fa-globe-asia" title="Live Preview"></i></a>
        </div>
      </div>
    </div>
  )
}