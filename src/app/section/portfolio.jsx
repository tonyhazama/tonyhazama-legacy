import React, { Component } from 'react'
import ReactModal from 'react-modal';
import { Emr, Vmdlab, Trav, MapIbid, Csmart } from './portfolio-item';


export default class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activePortfolio: undefined
    }
  }

  works = [
    { title: 'Market Auction Price', image: 'map3.jpg', content: MapIbid, tag: 'WEB DEVELOPMENT' },
    { title: 'Trav', image: 'trav2.jpg', content: Trav, tag: 'UI/UX' },
    { title: 'VMD Lab', image: 'vmdlab.jpg', content: Vmdlab, tag: 'WEB DEVELOPMENT' },
    { title: 'CSMART BCA', image: 'hehe.jpg', content: Csmart, tag: 'WEB DEVELOPMENT' },
    { title: 'EMR - Electronic Medical Record', image: 'hehe.jpg', content: Emr, tag: 'WEB DEVELOPMENT' },
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
        <h4 className="section-title" href='#portfolio'>Portfolio</h4>
          <div className="tiles">
            {this.works.map((item, index) => {
              const bg = !!item.image ?  item.image : `1.jpg`;
              return (
                <div 
                  className="tile"
                  onClick={_ => this.openModal(index)} 
                  key={'portfolio-item-'+index} 
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/${bg})`,
                    gridArea: `tile${index + 1}`
                  }}>
                  <div className="tag">{item.tag}</div>
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