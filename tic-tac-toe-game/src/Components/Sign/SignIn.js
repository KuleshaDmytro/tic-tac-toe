import './../../style/Sign/sign.css'
import { SignNav } from './SignNav';
import { useState } from 'react';
import { checking_email } from '../utils/checkingEmail';
import { checking_password } from '../utils/checkingPassword';
import { Link } from 'react-router-dom';

export const SignIn = () => {

    const [isEmailCorrect, setEmailCorrect] = useState(true);
    const [isPasswordCorrect, setPasswordCorrect] = useState(true);

    const handleClickLogin = () => {
  
        const isEmailInputCorrect = checking_email();
        const isPasswordInputCorrect = checking_password();

        setEmailCorrect(isEmailInputCorrect);
        setPasswordCorrect(isPasswordInputCorrect);

        if (isEmailInputCorrect && isPasswordInputCorrect) {
            localStorage.removeItem('activeBtn');
            window.location.href = '/'
        }

    }

    return (
        <div className="sign_nav" data-testid="signIn_component">
            <div className='sign_container'>

                <SignNav/>

                <div className='sign_card'>

                    <span className='address'>Email address</span>

                    <div className='input_wrapper'>

                        <div className='card margin_title'>
                            <input type='login' className='checking_login correct_input input_style ' placeholder='Login'/>
                            {!isEmailCorrect && 
                                <span className='incorrect'>email is incorrect or empty</span>}
                        </div>

                        <div className='card'>
                            <input type='password' className='checking_password correct_input input_style' placeholder='Password'/>
                            {!isPasswordCorrect && 
                                <span className='incorrect'>password is incorrect or empty</span>}
                        </div>
                    </div>

                    <div className='fp_card'>
                        <Link to={'/sign/forgot_password'} className='forgot_password' data-testid="forgot_password">
                            Forgot password?
                        </Link>
                    </div>

                    <div className='sign_btn_block'>
                        <button className='custom-btn btn btn-size' onClick={handleClickLogin} data-testid="sign_in">Sign in</button>
                    </div>

                </div>
            </div>
        </div>
    )
} 