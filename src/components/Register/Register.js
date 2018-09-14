import React, { Component } from 'react';

class Register extends Component {
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
                <span className='titleSpan'>ثبت نام سامانه</span>
                <div className='br2 shadow-2 mv2 registerForm tc center'>
                    <div className='registerFormContent cf center'>
                        <fieldset id="sign_up" className="tr ba b--transparent ph0 mh0">
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="firstName" style={{visibility: `${nameErr}`}}>
                                        {name}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="firstName">
                                    نام</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="firstName"  id="firstName" />
                            <label className="tr titleFormError pr1 mt2 db fw6 lh-copy " htmlFor="lastName" style={{visibility: `${nameErr}`}}>
                                        {lastName}</label>
                            <label className="tr titleForm mt2 db fw6 lh-copy " htmlFor="lastName">
                                    نام خانوادگی</label>
                                    <input className="tr  w-100 pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="lastName"  id="lastName" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="nationalCode" style={{visibility: `${nameErr}`}}>
                                        {nationalCode}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="nationalCode">
                                    کد ملی</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="nationalCode"  id="nationalCode" />
                            <label className="tr titleFormError pr1 mt2 db fw6 lh-copy " htmlFor="phoneNumber" style={{visibility: `${nameErr}`}}>
                                        {phoneNumber}</label>
                            <label className="tr titleForm mt2 db fw6 lh-copy " htmlFor="phoneNumber">
                                    تلفن همراه</label>
                                    <input className="w-100 pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="phoneNumber"  id="phoneNumber" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="job" style={{visibility: `${nameErr}`}}>
                                        {job}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="job">
                                    شغل</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="job"  id="job" />
                            <label className="tr titleFormError pr1 mt2 db fw6 lh-copy " htmlFor="birthDate" style={{visibility: `${nameErr}`}}>
                                        {birthDate}</label>
                            <label className="tr titleForm mt2 db fw6 lh-copy " htmlFor="birthDate">
                                    تاریخ تولد شمسی</label>
                                    <input className="tr  w-100 pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="birthDate"  id="birthDate" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="gender" style={{visibility: `${nameErr}`}}>
                                        {gender}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="gender">
                                    جنسیت</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="gender"  id="gender" />
                            <label className="tr titleFormError pr1 mt2 db fw6 lh-copy " htmlFor="province" style={{visibility: `${nameErr}`}}>
                                        {province}</label>
                            <label className="tr titleForm mt2 db fw6 lh-copy " htmlFor="province">
                                    استان</label>
                                    <input className="tr  w-100 pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="province"  id="province" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="city" style={{visibility: `${nameErr}`}}>
                                        {city}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="city">
                                    شهر</label>
                                    <input className="tr pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="city"  id="city" />
                            <label className="tr titleFormError pr1 db mt2 fw6 lh-copy " htmlFor="emailAdress" style={{visibility: `${nameErr}`}}>
                                        {emailAdress}</label>
                            <label className="tr titleForm db mt2 fw6 lh-copy " htmlFor="emailAdress">
                                    پست الکترونیک</label>
                                    <input className="pa2 w-100 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="emailAdress"  id="emailAdress" />
                        </fieldset>
                            <input className="tr b mv3 ph3 pv2 input-reset ba submitButton grow pointer  dib w-50 tc" type="submit" value="ارسال" />
                    </div>
                </div>
            </div>
        )
    };
};

export default Register;

