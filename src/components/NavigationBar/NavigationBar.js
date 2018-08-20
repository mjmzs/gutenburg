import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div id='rtldiv' class="mb5 lh-copy">
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" href="http://opencollective.com/tachyons" title="Home">
            خانه
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" href="/xray/" title="Electronic Visit Card">
            کارت ویزیت الکترونیک
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3" href="/resources/" title="SMS Panel">
          سامانه پیامکی
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" href="/gallery/" title="Print Services">
            خدمات چاپ
          </a>
          <a class="ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph4" href="/components/" title="Graphic Design Services">
          خدمات طراحی گرافیک
          </a>
          <a class="acontentjustify ba no-underline grow br2 b inline-flex items-center mr4 mb3 pv2 ph3" href="/docs" title="Contact">
          تماس با ما
          </a>
        </div>
    )
}

export default NavigationBar;