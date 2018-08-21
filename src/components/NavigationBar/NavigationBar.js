import React from 'react';
import './NavigationBar.css';

const NavigationBar = ({ onPageChange }) => {
    return (
        <div id='rtldiv' class="mb5 lh-copy">
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" title="Home" onClick={()=> onPageChange('home')}>
            خانه
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" title="Electronic Visit Card" onClick={()=> onPageChange('elec')}>
            کارت ویزیت الکترونیک
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3" onClick={()=> onPageChange('sms')}>
          سامانه پیامکی
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" onClick={()=> onPageChange('print')}>
            خدمات چاپ
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" onClick={()=> onPageChange('design')}>
          خدمات طراحی گرافیک
          </a>
          <a class="acontentjustify ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph3" onClick={()=> onPageChange('register')}>
          ثبت پنل
          </a>
          <a class="acontentjustify ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph3" onClick={()=> onPageChange('contact')}>
          تماس با ما
          </a>
        </div>
    )
}

export default NavigationBar;