import React from 'react';
import TitleImage from './titlebar.png';
const TitleBar = () => {
    return (
        <div id='rtldiv'>
            <img alt='Gutenberg' src={TitleImage} style={{height: 'auto', width: '90%'}} />
        </div>
    )
}

export default TitleBar;