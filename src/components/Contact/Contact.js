import React from 'react';

const Contact = () => {
    return (
      <div>
      <span className='titleSpan mb3 shadow-2 mt4'>تماس با ما</span>
          <div class="mw7 center mcontent ph3 pv1 shadow-2 mb3">
              <div class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <div class="cf mt3 center">
                   <label class="db fw6 lh-copy f5" for="email-address">
                        پست الکترونیک</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address" />
                   <label class="mt3 db fw6 lh-copy f5" for="full-name">
                        نام کامل</label>
                        <input class="tr pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="full-name"  id="full-name" />
                </div>
                <label for="message" class="f5 b db mb2 mt3">پیام / درخواست
                </label>
                <textarea id="message" name="message" class="tr db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc">
                </textarea>
                </fieldset>
                  <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="ارسال" />
            </div>
        </div>
     </div>
    )
}

export default Contact;