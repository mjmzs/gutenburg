import React from 'react';

const CRMP = ({ onPageChange }) => {
    return (
        <div>
            <span className='titleSpan mb3 shadow-2 mt4'>ارائه ارتباطی متفاوت با مشتریان</span>
            <div className='ph3 pv1 mcontent shadow-2 mb3'>
            <p id='rtldiv' className='pMainContent tj'>سامانه ارتباط با مشتریان (CRM) چیست؟ و چه هدفی دارد؟</p>
            <p id='rtldiv' className='pMainContent tj'>
            <ul className='a'>
                <li>اگر تجارت ویا کسب و کار و مراجعین خود را دارید ویا اگر می خواهد شروع کنید، حتما فکر کرده ویا شنیده اید که اگر مشتریان شما همیشه صرفا از شما خدمات بگیرند شما به چه درآمدی خواهید رسید؟</li>
                <li>چقدر مشتری داشته اید که در حال حاظر هیچ دسترسی به آنها ویا حتی برخی از مشتریان فعلی خود ندازید؟</li>
                <li>چندین مشتری وفادار داشته اید که الان از شما خدمات نمی گیرند؟</li>
                </ul>
            </p>
            <p id='rtldiv' className='pMainContent tj'>اگر خوب فکر کنید متوجه خواهید شد که می توانستید بسیاری مشتری ثابت داشته باشد و حتی به جای گاهی میرسید که دیگرخود را الزام به پرداخت هزینه های سنگین تبلیغات نمی کردید. برند های معتبر و معروف دنیا با همین روش ها مشتریان خود را راضی نگه می دارند چون ثابت شده و باور داریم، اولا پیدا کردن مشتری جدید پر هزینه تر از نگه داشتن مشتریان فعلی خواهد بود و دوم، هدف اصلی و عمده تبلیغات برای صاحبان آنها، جذب مشتری برای پیشرفت و افزایش پتانسیل و درآمد کاری خود می باشد. در نتیجه تبلیغات وقتی موثر هستند که مشتری جدید پیدا می شوند، و تبلیغات وقتی نتیجه می دهند که اثرات تبلیغات ( مشتریان جدید ) مشتریان و مشترکین ثابت شما بشوند. این همان هدف اصلی مدیریت ارتباط با مشتریان است.</p>
            <p id='rtldiv' className='pMainContent tj'>
            همین حالا شروع کنید. برای اینکار ابتدا ثبت نام کرده و سپس با ما تماس بگیرید.  <p class="f3 link pointer dark-red" onClick={()=> onPageChange('register')} style={{display: 'inline'}}>** لینک **</p>  ثبت نام  <p class="f3 link pointer dark-red" onClick={()=> onPageChange('contact')} style={{display: 'inline'}}>** لینک **</p>  تماس.
            </p>
            </div>
        </div>
    )
}

export default CRMP;