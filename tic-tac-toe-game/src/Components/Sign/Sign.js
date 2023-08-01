import { useState } from 'react'
import './../../style/Sign/sign.css'
import './../../style/Game/button.css'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'
import { ForgotPassword } from './ForgotPassword'
import { PasswordRecovery } from './PasswordRecovery'


export const Sign = () => {

    const [activeBtn, setActiveBtn] = useState(true);
    const [isEmailCorrect, setEmailCorrect] = useState(true);
    const [isPasswordCorrect, setPasswordCorrect] = useState(true);
    const [witchContainerShow, setWitchContainerShow] = useState('SignIn');

    const checking_email = () => {
        const email_element = document.querySelectorAll(".checking_login");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(email_element);
        checking(email_element, emailRegex, setEmailCorrect)

    }

    const checking_password = () => {
        const password_element = document.querySelectorAll(".checking_password");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        checking(password_element, passwordRegex, setPasswordCorrect)

    }

    const checking = (elements, regex, setValue) => {
        elements.forEach((el) => {
            let value = el.value;
            if (!regex.test(value)) {
                el.classList.remove('correct_input');
                el.classList.add('incorrect_input');
                setValue(false)
            }else{
                el.classList.add('correct_input');
                el.classList.remove('incorrect_input');
                setValue(true)
            }
        })
    }

    const forgotPassword = () => {
        setWitchContainerShow('forgotPassword')
    }

    const passwordRecovery = () => {
        setWitchContainerShow('passwordRecovery')
    }

    const handleClickLogin = () => {
        checking_email();
        checking_password();
        console.log('The user has logged');
    }

    const handleClickRegistered = () => {
        checking_email();
        checking_password();
        console.log('The user has registered');
    }

    const handleClickForgotPassword = () => {
        checking_email();
        console.log(isEmailCorrect);
        if (isEmailCorrect) {
            
            passwordRecovery();
        }
    }

    const handleClickSignIn = () => {
        setWitchContainerShow('SignIn')
        setActiveBtn(true);
    }

    const handleClickSignOut = () => {
        setWitchContainerShow('SignOut')
        setActiveBtn(false);
    }



    return(
            <div className="sign_nav">
               <div className='sign_container'>

                    <div className='change_sign'>

                        <button className={`sign ${activeBtn ? 'active': ''}`} onClick={handleClickSignIn}>Sign in</button>

                        <button className={`sign ${activeBtn ? '': 'active'}`} onClick={handleClickSignOut}>Sign up</button>

                    </div>

                    {witchContainerShow === 'SignIn' &&  <SignIn forgotPassword={forgotPassword} handleClickLogin={handleClickLogin} isEmailCorrect={isEmailCorrect} isPasswordCorrect={isPasswordCorrect}/>}
                    {witchContainerShow === 'SignOut' && <SignOut handleClickRegistered={handleClickRegistered} isEmailCorrect={isEmailCorrect} isPasswordCorrect={isPasswordCorrect}/>}
                    {witchContainerShow === 'forgotPassword' && <ForgotPassword isEmailCorrect={isEmailCorrect} handleClickForgotPassword={handleClickForgotPassword}/>}
                    {witchContainerShow === 'passwordRecovery' && <PasswordRecovery handleClickLogin={handleClickLogin}/>}               
               </div>
         
            </div>

    )
}