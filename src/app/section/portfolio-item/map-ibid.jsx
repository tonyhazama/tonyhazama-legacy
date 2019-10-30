/**
 * @author Tony Hazama
 * @email tonyhazama4721@gmail.com
 * @create date 2019-10-15 15:21:01
 * @modify date 2019-10-15 15:21:01
 * @desc Portfolio 1: Classmate Portfolio
 */

import React from 'react'

export const MapIbid = () => {
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
          <div className="title">Market Auction Price - IBID Auction Price statistics</div>
          <div className="desc">
            <span>2019</span>
            <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span>Serasi Autoraya</span>
          </div>
        </div>
        <p className="text">
          Market Auction Price adalah layanan dari IBID, balai lelang otomotif terbesar di Indonesia, 
          yang menyajikan statistik harga pasaran mobil lelang dalam berbagai format grafik
          serta detail sesuai kebutuhan pengguna. MAP terintegrasi dengan ACV (Astra Car Valuation) 
          sebagai standar valuasi mobil terpercaya yang sistematis dan komprehensif sehingga 
          analisa serta tren harga yang disajikan lebih tepat dan akurat.
        </p>
        <p className="text">
          MAP membantu keputusan membeli mobil idaman dengan rasa nyaman sesuai anggaran. 
          Ketahui harga pasaran mobil yang akan dibeli secara rinci sesuai kondisi, 
          lokasi dan dalam kurun waktu tertentu sehingga dapat diketahui tren harganya.
        </p>
        
        <div className="actions center">
          <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-github" title="View on Github"></i></a>
          <a href='https://tonyhazama.github.io/vmdlab/' target='_blank' className="action"><i className="fas fa-globe-asia" title="Live Preview"></i></a>
        </div>
      </div>
    </div>
  )
}
