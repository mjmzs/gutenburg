import React, { Component } from 'react';
import TitleBar from '../components/TitleBar/TitleBar.js';
import NavigationBar from '../components/NavigationBar/NavigationBar.js';
import ImageSlider from '../components/ImageSlider/ImageSlider.js';
import MainContainer from '../components/MainContainer/MainContainer.js';
import FooterContainer from '../components/FooterContainer/FooterContainer.js';
import ElecContainer from '../components/ElecContainer/ElecContainer.js';
import SMSPanel from '../components/SMSPanel/SMSPanel.js';
import Print from '../components/Print/Print.js';
import Design from '../components/Design/Design.js';
import Register from '../components/Register/Register.js';
import Contact from '../components/Contact/Contact.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      root: 'home',
    };
  }
  rootSelector = (root) => {
    
    switch (root){
      case 'home':
        return (
          <div>
            <ImageSlider />
            <div className='shadow-2'>
              <MainContainer />
              <FooterContainer />
            </div>
            
          </div>
        );
        break;
      case 'elec':
        return (
          <div className='shadow-2'>
            <ElecContainer />
          </div>
        );
        break;
      case 'sms':
        return (
          <div className='shadow-2'>
            <SMSPanel />
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
          <div className='shadow-2'>
            <Register />
          </div>
        );
        break;
      case 'contact':
        return (
          <div className='shadow-2'>
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
      <div className='app'>
          <header id='rtldiv minsnav' className='shadow-2'>
              <TitleBar />
              <NavigationBar onPageChange={this.onPageChange} />
          </header>
          {this.rootSelector(root)}
      </div>
    )
  }
}

export default App;

    // if ( root === 'home') {
    //   return (<div></div>);
    // } else if (root === 'elec') {
    //   return (<div></div>);
    // } else if (root === 'elec') {
    //   return (<div></div>);
    // } else if (root === 'elec') {
    //   return (<div></div>);
    // } else if (root === 'elec') {
    //   return (<div></div>);
    // } else (root === 'elec') {
    //   return (<div></div>);
    // };

// return (
//   <div className='app'>
//    <header id='rtldiv'>
//        <TitleBar />
//        <NavigationBar />
//    </header>
//    { root === 'home' ?
//    <div>
//      <ImageSlider />
//      <MainContainer />
//      <FooterContainer />
//    </div>
//    :
//    <div>
//      <ImageSlider />
//      <MainContainer />
//      <FooterContainer />
//    </div> }
//  </div>
//  )