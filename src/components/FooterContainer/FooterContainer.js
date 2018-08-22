import React from 'react';
import './FooterContainer.css';
import FooterImage1 from './footerimg1.jpg';
import FooterImage2 from './footerimg2.jpg';
import FooterImage3 from './footerimg3.jpg';
import FooterImage4 from './footerimg4.jpg';

const FooterContainer = () => {
    return (
        <div id='rtldiv'>
            <span className='titleSpan mb3 shadow-2 mt4'>گوتنبرگ در یک نگاه</span>
            <div className='mb3 shadow-2 pv3 mainFooterFix'>
            <img alt='Pic1' src={FooterImage1} className='br2 mainFooterImage shadow-1'/>
            <img alt='Pic2' src={FooterImage2} className='br2 mainFooterImage shadow-1'/>
            <img alt='Pic3' src={FooterImage3} className='br2 mainFooterImage shadow-1'/>
            <img alt='Pic4' src={FooterImage4} className='br2 mainFooterImage shadow-1'/>
            </div>
        </div>
    )
}

export default FooterContainer;