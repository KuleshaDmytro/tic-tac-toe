import './../../style/Sign/sign.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { checking_email } from '../utils/checkingEmail';

export const ForgotPassword = () => {
    const [isCorrect, setIsCorrect] = useState(true);

    const handleClickForgotPassword = () => {
        const isEmailCorrect = checking_email();

        setIsCorrect(isEmailCorrect);

        if (isEmailCorrect) {            
            window.location.href = '/sign/forgot_password/password_recovery';
        }

    }

    return(
        <div className="sign_nav">
            <div className='sign_container'>
                <div className='sign_card'>

                    <span className='address'>Email address</span>

                    <div className='input_wrapper'>

                        <div className='card margin_title'>
                            <input type='login' className='checking_login correct_input input_style ' placeholder='Email'/>
                            {!isCorrect && 
                                <span className='incorrect'>email is incorrect or empty</span>}
                        </div>

                    </div>

                    <div className='fp_card'>
                        <Link to={'/sign/in'} className='forgot_password'>
                            Return to Sign in
                        </Link>
                    </div>

                    <div className='sign_btn_block'>              
                        <button className='custom-btn btn btn-size' onClick={handleClickForgotPassword}>Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
} 