import React, { Component } from 'react';
import TitleBar from '../components/TitleBar/TitleBar.js';
import NavigationBar from '../components/NavigationBar/NavigationBar.js';
import ImageSlider from '../components/ImageSlider/ImageSlider.js';
import MainContainer from '../components/MainContainer/MainContainer.js';
import FooterContainer from '../components/FooterContainer/FooterContainer.js';
import ElecContainer from '../components/ElecContainer/ElecContainer.js';
import CRMP from '../components/CRMP/CRMP.js';
import Print from '../components/Print/Print.js';
import Design from '../components/Design/Design.js';
import Register from '../components/Register/Register.js';
import Contact from '../components/Contact/Contact.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      root: 'register',
    };
  }
  rootSelector = (root) => {
    
    switch (root){
      case 'home':
        return (
          <div>
            <div className='shadow-2'>
              <MainContainer />
            </div>
            <ImageSlider />
            <div className='shadow-2'>
              <FooterContainer />
            </div>
            
          </div>
        );
        break;
      case 'elec':
        return (
          <div className='shadow-2'>
            <ElecContainer onPageChange={this.onPageChange}/>
          </div>
        );
        break;
      case 'sms':
        return (
          <div className='shadow-2'>
            <CRMP onPageChange={this.onPageChange}/>
          </div>
        );
        break;
      case 'print':
        return (
          <div className='shadow-2'>
            <Print />
          </div>
        );
        break;
      case 'design':
        return (
          <div className='shadow-2'>
            <Design />
          </div>
        );
        break;
      case 'register':
        return (
          <div>
            <Register />
          </div>
        );
        break;
      case 'contact':
        return (
          <div>
            <Contact />
          </div>
        );
        break;
      default:
        return (
          <div className='shadow-2'>
            <ImageSlider />
            <MainContainer />
            <FooterContainer />
          </div>
        );
        break;
    }
  }
  onPageChange = (root) => {
    this.setState({root});
  }
  render() {
    const { root } = this.state;
    return (
      <div className='app bgImage'>
          <header id='rtldiv minsnav' className='shadow-5 header'>
              <TitleBar />
              <NavigationBar onPageChange={this.onPageChange} />
          </header>
          {this.rootSelector(root)}
      </div>
    )
  }
}

export default App;