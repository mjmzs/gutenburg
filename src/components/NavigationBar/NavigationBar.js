import React from 'react';

const NavigationBar = ({ onPageChange }) => {
    return (
        <div id='rtldiv' class="mb3 lh-copy">
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4 shadow-1" title="Home" onClick={()=> onPageChange('home')}>
            خانه
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4 shadow-1" title="Electronic Visit Card" onClick={()=> onPageChange('elec')}>
            کارت ویزیت الکترونیک
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 shadow-1" onClick={()=> onPageChange('sms')}>
          سامانه CRM
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4 shadow-1" onClick={()=> onPageChange('print')}>
            خدمات چاپ
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4 shadow-1" onClick={()=> onPageChange('design')}>
          خدمات طراحی گرافیک
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph3 shadow-1" onClick={()=> onPageChange('register')}>
          ثبت پنل
          </a>
          <a class="pointer ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph3 shadow-1" onClick={()=> onPageChange('contact')}>
          تماس با ما
          </a>
        </div>
    )
}

export default NavigationBar;