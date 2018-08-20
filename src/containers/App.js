import React, { Component } from 'react';
import TitleBar from '../components/TitleBar/TitleBar.js';
import NavigationBar from '../components/NavigationBar/NavigationBar.js';
import ImageSlider from '../components/ImageSlider/ImageSlider.js';
import MainContainer from '../components/MainContainer/MainContainer.js';
import FooterContainer from '../components/FooterContainer/FooterContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header id='rtldiv'>
          <TitleBar />
          <NavigationBar />
        </header>
        <ImageSlider />
        <MainContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
