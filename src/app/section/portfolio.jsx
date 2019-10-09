import React, { Component } from 'react'
import { Container} from 'react-bootstrap';
import ReactModal from 'react-modal';
import { Portfolio1 } from './portfolio-item';



export default class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activePortfolio: undefined
    }
  }

  works = [
    { title: 'Work 1', image: '' },
    { title: 'Work 2', image: '' },
    { title: 'Work 3', image: '' },
    { title: 'Marketplace Auction Price', image: '' },
    { title: 'CSMART BCA', image: '' },
    { title: 'Work 3', image: '' },
    { title: 'Marketplace Auction Price', image: '' },
    { title: 'CSMART BCA', image: '' },
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
      <div className={"section dark"} id="portfolio">
        <div className="container page">
          <h4 className="section-title">Portfolio</h4>
          <div className="tiles">
            {this.works.map((item, index) => (
              <div className="tile" onClick={_ => this.openModal(index)} key={'portfolio-item-'+index} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portofolio/${(index % 5)+1}.jpg)`}}>
                <div className="wrapper"> <div className="title">{item.title}</div> </div>
              </div>
            ))}
          </div>
        </div>
        <PortfolioModal item={this.state.activePortfolio} onClose={_ => this.closeModal()}  />
      </div>
    )
  }
}


const PortfolioModal = ({item, onClose}) => {

  return (
    <ReactModal 
      isOpen={!!item}
      onRequestClose={onClose}
      className="container Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    > 
      <Portfolio1 />
    </ReactModal>
  );
};