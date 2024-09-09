import React, { Component } from "react";

const imagenes = ["/imgs/banner1.png", "/imgs/banner2.jpg", "/imgs/banner3.jpg"];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 0,
    };
    this.rotationInterval = null;
  }

  componentDidMount() {
    this.startRotation();
  }

  componentWillUnmount() {
    this.stopRotation();
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      this.setState((prevState) => ({
        c: (prevState.c + 1) % imagenes.length,
      }));
    }, 3000);
  }

  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      c: (prevState.c - 1 + imagenes.length) % imagenes.length,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      c: (prevState.c + 1) % imagenes.length,
    }));
  };

  handleDotClick = (index) => {
    this.setState({ c: index });
  };
  
  render() {
    return (
      <div className="banner-container">
        <div className="banner-content">
          <img className="imgcab" src={imagenes[this.state.c]} alt="header" />
          <div className="navigation">
            <div className="circle">
              <button onClick={this.handlePrevClick}>{"< "}</button>
            </div>
            <div className="circle">
              <button onClick={this.handleNextClick}>{">"}</button>
            </div>
          </div>
        </div>
        
        <div className="dots-container">
          {imagenes.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === this.state.c ? 'active' : ''}`}
              onClick={() => this.handleDotClick(index)}
            />
          ))}
        </div>
       
      </div>
      
      
    );
    
  }
}

export default Banner;