// import React from 'react';

// const Contact = () => {
//     return (
//       <div>
//       <span className='titleSpan mb3 shadow-2 mt4'>تماس با ما</span>
//           <div className="mw7 center mcontent ph3 pv1 shadow-2 mb3">
//               <div className="measure center">
//                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                 <div className="cf mt3 center">
//                    <label className="db fw6 lh-copy f5" for="email-address">
//                         پست الکترونیک</label>
//                         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address" />
//                    <label className="mt3 db fw6 lh-copy f5" for="full-name">
//                         نام کامل</label>
//                         <input className="tr pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="full-name"  id="full-name" />
//                 </div>
//                 <label for="message" className="f5 b db mb2 mt3">پیام / درخواست
//                 </label>
//                 <textarea id="message" name="message" className="tr db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc">
//                 </textarea>
//                 </fieldset>
//                   <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="ارسال" />
//             </div>
//         </div>
//      </div>
//     )
// }
import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            regKind: 'personal',
            regData: {},
            dataValidation:{
                name: 'باید حداقل 3 و حداکثر 10 حرف باشد',
                lastName: 'باید حداقل 3 و حداکثر 20 حرف باشد',
                nationalCode: 'باید 10 رقم باشد',
                phoneNumber: 'بدون صفر ابتدا و باید 10 رقم باشد',
                job: 'باید حداقل 3 و حداکثر 20 حرف باشد ',
                birthDate: 'سال، ماه و روز لازم است',
                gender: 'لطفا انتخاب کنید',
                province: 'بجز قم باید حداقل 4 حرف باشد',
                city: 'باید حداقل 2 حرف باشد',
                emailAdress: 'لطقا با دقت یک ایمیل صحیح وارد کنید'
            },
            validationError:{
                nameErr: 'visable',
                lastNameErr: 'visable',
                nationalCodeEr: 'visable',
                phoneNumberErr: 'visable',
                jobErr: 'visable',
                birthDateErr: 'visable',
                genderErr: 'visable',
                provinceErr: 'visable',
                cityErr: 'visable',
                emailAdressErr: 'visable'
            }
        };
    };

    render() {
        const { name, lastName, nationalCode, phoneNumber, job, birthDate, gender, province, city, emailAdress } = this.state.dataValidation;
        const { nameErr, lastNameErr, nationalCodeEr, phoneNumberErr, jobErr, birthDateErr, genderErr, provinceErr, cityErr, emailAdressErr } = this.state.validationError;
        return (
            <div className=''>
                <span className='titleSpan mb3 shadow-2 mt4'>تماس با ما</span>
                <div className="shadow-2 mv2 registerForm tc center">
                    <div className='registerFormContent cf center'>
                        <fieldset id="sign_up" className="tr ba b--transparent ph0 mh0">
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="firstName" style={{visibility: `${nameErr}`}}>
                                        {name}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="firstName">
                                    نام</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="firstName"  id="firstName" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="emailAdress" style={{visibility: `${nameErr}`}}>
                                        {emailAdress}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="emailAdress">
                                    پست الکترونیک</label>
                                    <input className="pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="emailAdress"  id="emailAdress" />
                            <label for="message" className="f5 b db mb2 mt3">پیام / درخواست
                            </label>
                            <textarea id="message" name="message" className="pa2 messHeghit input-reset ba bg-transparent hover-bg-black hover-white" aria-describedby="comment-desc">
                            </textarea>
                        </fieldset>
                            <input className="b mv3 ph3 pv2 input-reset ba submitButton grow pointer  dib w-50 tc" type="submit" value="ارسال" />
                    </div>
                </div>
            </div>
        )
    };
};


export default Contact;