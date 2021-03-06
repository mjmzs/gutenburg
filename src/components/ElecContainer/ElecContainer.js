import React from 'react';

const ElecContainer = ({ onPageChange }) => {
    return (
        <div>
            <span className='titleSpan mb3 shadow-2 mt4'>کارت ویزیت الکترونیک چیست؟</span>
            <div className='ph3 pv1 mcontent shadow-2 mb3'>
            <p id='rtldiv' className='pMainContent tj'>
            همانطور که از اسم کارت حدس می زنید، کارت ویزیت الکترونیک معرف کار و شخصیت کاری فرد، شرکت ویا گروه شما می باشد. با این کارت یک درگاه الکترونیک به سمت خدمات و محصولات خود باز خواهید کرد که از همه جا و با همه در دسترس خواهد بود. همیشه ماندگار است، هزینه بسیار کمتری نسب به کارت های چاپی دارد، سازگار و دوستار محیط زیست بوده و دیگر مشتری نگران گم کردن کارت و یا از دست دادن دسترسی و ارتباط با شما را نخواهد داشت.
            </p>
            <p id='rtldiv' className='pMainContent tj'>
            کارت ویزیت الکترونیک به دو بخش تقسیم و قابل دسترس خواهد بود. بخش اول در بستر سیستم پیامکی مخابرات و بخش دوم در بستر USSD ارائه می گردد. برای دسترسی به کارت کافی است که مشتریان و مراجعه کنندگان کد اختصاصی یک شخص، گروه ویا شرکت  را داشته باشند. سپس از طریق ارسال کد به سامانه 10008590 ویا با شماره گیری کد USSD در بستر سر شماره *6655# همه، از همه جا و برای همیشه آخرین نسخه از کارت شما که بیانگر حوزه فعالیت و خدمات شما می باشد را داشته باشد.
            </p>
            <p id='rtldiv' className='pMainContent tj'>
            همین حالا کارت خود را در 5 دقیقه بسازید. برای اینکار ابتدا ثبت نام کرده و سپس با ما تماس بگیرید.  <p class="f3 link pointer dark-red" onClick={()=> onPageChange('register')} style={{display: 'inline'}}>** لینک **</p>  ثبت نام  <p class="f3 link pointer dark-red" onClick={()=> onPageChange('contact')} style={{display: 'inline'}}>** لینک **</p>  تماس.
            </p>
            </div>
        </div>
    )
}

export default ElecContainer;