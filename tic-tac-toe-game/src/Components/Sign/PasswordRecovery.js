import './../../style/Modal/modal.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { checkIfThePasswordIsTheSame } from '../utils/checkIfThePasswordIsTheSame';
import { checking_password } from '../utils/checkingPassword';
import { useNavigate } from 'react-router-dom';

export const PasswordRecovery = () => {

    let navigate = useNavigate();
    const [isPasswordCorrect, setPasswordCorrect] = useState(true);
    const [isPasswordSame, setIsPasswordSame] = useState(true)
    const [isCodeCorrect, setIsCodeCorrect] = useState(true);


    const handleClickLogin = () => {
        
        const [isSame, passwordInputs] = checkIfThePasswordIsTheSame();
        setIsPasswordSame(isSame);

        const isPasswordInputCorrect = checking_password(isSame);
        setPasswordCorrect(isPasswordInputCorrect);

        if (isCodeCorrect && isSame && isPasswordInputCorrect) {
            console.log(123);
            navigate('/sign/in');
        }

    }

    return(
        <div className="sign_nav">
        <div className='sign_container'>
                <div className='sign_card'>
                    <div className='input_wrapper'>

                        <div className='card margin_title'>
                            <input type='login' className='checking_login correct_input input_style ' placeholder='Code'/>
                            {!isCodeCorrect && 
                                <span className='incorrect'>code is incorrect</span>}
                        </div>

                                
                        <div className='card'>
                            <input type='password' className='checking_password correct_input input_style' data-testid='password' placeholder='Password'/>
                            
                            {/* {(!isPasswordCorrect) && 
                                <span className='incorrect'>password should containe</span>} */}
                        </div>
                        <div className='card'>
                            <input type='password' className='checking_password correct_input input_style'  data-testid='password' placeholder='Enter the password again'/>
                            {(!isPasswordCorrect || !isPasswordSame) && 
                                <span className='incorrect'>password is incorrect or does not match</span>}
                        </div>
                    </div>

                    <div className='fp_card'>
                        <Link to={'/sign/in'} className='forgot_password' data-testid="return_to_signIn">
                            Return to Sign in
                        </Link>
                    </div>

                    <div className='sign_btn_block'>
                        <button className='custom-btn btn btn-size' data-testid="sign_in" onClick={handleClickLogin} >Remember password</button>
                    </div>

                </div>
            </div>
        </div>
    )
}