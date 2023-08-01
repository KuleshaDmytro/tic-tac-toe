import './../../style/Sign/sign.css'
import { SignNav } from './SignNav';
import { useState } from 'react';
import { checking_email } from '../utils/checkingEmail';
import { checking_password } from '../utils/checkingPassword';

export const SignOut = () => {

    const [isEmailCorrect, setEmailCorrect] = useState(true);
    const [isPasswordCorrect, setPasswordCorrect] = useState(true);

    const handleClickRegistered = () => {
        checking_email(setEmailCorrect);
        checking_password(setPasswordCorrect);
        console.log('The user has registered');
    }

    return (
        <div className="sign_nav">
            <div className='sign_container'>

                <SignNav/>

                <div className='sign_card'>

                    <span className='address'>Nickname</span>

                    <div className='input_wrapper'>
                        <div className='card margin_title'>
                            <input className='correct_input input_style margin_title' placeholder='Enter your nickname'/>
                        </div>
                    </div>
                    

                    <span className='address'>Email address</span>

                    <div className='input_wrapper'>
                        <div className='card margin_title'>
                            <input type='login' className='checking_login correct_input input_style margin_title' placeholder='Enter your login'/>
                            {!isEmailCorrect && 
                                <span className='incorrect'>email is incorrect</span>}
                        </div>
                        <div className='card'>
                            <input type='password' className='checking_password correct_input input_style ' placeholder='Enter your password'/>
                            {!isPasswordCorrect && 
                                <span className='incorrect'>password is incorrect</span>}
                        </div>
                    </div>

                    <div className='sign_btn_block'>
                        <button className='custom-btn btn btn-size' data-testid="sign_out" onClick={handleClickRegistered}>Sign up</button>
                    </div>

                </div>
            </div>
        </div>
    )
} 