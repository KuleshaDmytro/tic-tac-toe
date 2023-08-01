import './../../style/Sign/sign.css'
import { useState } from 'react';
import { checking_email } from '../utils/checkingEmail';

export const ForgotPassword = () => {

    const [isEmailCorrect, setEmailCorrect] = useState(true);

    const handleClickForgotPassword = () => {
        checking_email(setEmailCorrect);

        // if (isEmailCorrect) {            
        //     passwordRecovery();
        // }
    }

    return(
        <div className="sign_nav">
            <div className='sign_container'>
                <div className='sign_card'>

                    <span className='address'>Email address</span>

                    <div className='input_wrapper'>

                        <div className='card margin_title'>
                            <input type='login' className='checking_login correct_input input_style ' placeholder='Email'/>
                            {!isEmailCorrect && 
                                <span className='incorrect'>email is incorrect</span>}
                        </div>

                    </div>

                    <div className='fp_card'>
                        <button className='forgot_password' >Return to Sign in</button>
                    </div>

                    <div className='sign_btn_block'>
                        <button className='custom-btn btn btn-size' onClick={handleClickForgotPassword}>Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
} 