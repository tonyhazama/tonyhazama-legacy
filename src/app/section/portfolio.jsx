import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { Portfolio1, Portfolio2, Portfolio3 } from './portfolio-item';



export default class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activePortfolio: undefined
    }
  }

  works = [
    { title: 'Classmate', image: 'hehe.jpg', content: Portfolio1 },
    { title: 'Marketplace Auction Price', image: 'mosaic.jpg', content: Portfolio2 },
    { title: 'VMD Lab', image: 'mosaic.jpg', content: Portfolio3 },
    { title: 'CSMART BCA', image: 'ee.jpg', content: Portfolio1 },
    { title: 'EMR - Electronic Medical Record', image: '', content: Portfolio1 },
  ]

  openModal(index) {
    this.setState({activePortfolio: this.works[index]});
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ activePortfolio: undefined });
    document.body.style.overflow = '';
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={"section " + theme} id="portfolio">
        <div className="container page">
          <h4 className="section-title">Portfolio</h4>
          <div className="tiles">
            {this.works.map((item, index) => {
              const bg = !!item.image ?  item.image : `${(index % 5)+1}.jpg`;
              return (
                <div 
                  className="tile"
                  onClick={_ => this.openModal(index)} 
                  key={'portfolio-item-'+index} 
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/${bg})`,
                    gridArea: `tile${index + 1}`
                  }}>
                  <div className="wrapper"> <div className="title">{item.title}</div> </div>
                </div>
              )
            })}
          </div>
        </div>
        <PortfolioModal item={this.state.activePortfolio} onClose={_ => this.closeModal()}  />
      </div>
    )
  }
}


const PortfolioModal = ({item, onClose}) => {
  const Content = !!item ? item.content : () => null; 
  return (
    <ReactModal 
      isOpen={!!item}
      onRequestClose={onClose}
      className="container Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    > 
      <Content />
    </ReactModal>
  );
};