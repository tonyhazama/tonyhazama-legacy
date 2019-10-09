import React, {  } from 'react'

// export class portfolio1 extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


export const Portfolio1 = () => {
  return (
    <div className="portfolio-modal light">
      <div className="module picture center dark" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/ee.jpg)`}}>
        {/* { console.log(process.env.PUBLIC_URL) } */}
        <div className="title large white">You can get the limited edition of Zlín AR</div>
        <span className="small white">
          The city is often referred to as the “City of Greenery” <br />
          and its unique functionalist architecture gives this industrial town 
        </span>
        {/* <img src={`${process.env.PUBLIC_URL}/images/portofolio/ee.jpg`} alt=""/> */}
      </div>
      <div className="module padded">
        <div className="title large">You can get the limited edition of Zlín AR</div>
        <span className="small">
          The city is often referred to as the “City of Greenery” 
          and its unique functionalist architecture gives this industrial town 
          its special magic: The bare red ricks, the basic construction element of all buildings, 
          flat roofs are all characteristics of most dominant buildings in it. 
          A large part of the city originated during the great era of the Bata shoe enterprise. 
          My goal is to catch its unique atmosphere using certain functionalist and geometric rules.
        </span>
      </div>
      <div className="module picture"></div>
      <div className="module dark padded center small">
        <div className="title medium">You can get the limited edition of Zlín AR posters at the town hall</div>
        The city is often referred to as the “City of Greenery” 
        and its unique functionalist architecture gives this industrial town 
        its special magic: The bare red ricks, the basic construction element of all buildings, 
        flat roofs are all characteristics of most dominant buildings in it. 
        A large part of the city originated during the great era of the Bata shoe enterprise. 
        My goal is to catch its unique atmosphere using certain functionalist and geometric rules.
      </div>
    </div>
  )
}
