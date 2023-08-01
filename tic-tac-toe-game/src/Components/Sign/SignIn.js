import './../../style/Sign/sign.css'

export const SignIn = ({forgotPassword, handleClickLogin, isEmailCorrect, isPasswordCorrect}) => {



    return (
        <div className='sign_card'>

            <span className='address'>Email address</span>

            <div className='input_wrapper'>

                <div className='card margin_title'>
                    <input type='login' className='checking_login correct_input input_style ' placeholder='Login'/>
                    {!isEmailCorrect && 
                        <span className='incorrect'>email is incorrect</span>}
                </div>

                <div className='card'>
                    <input type='password' className='checking_password correct_input input_style' placeholder='Password'/>
                    {!isPasswordCorrect && 
                        <span className='incorrect'>password is incorrect</span>}
                </div>
            </div>

            <div className='fp_card'>
                <button className='forgot_password' onClick={forgotPassword}>Forgot password?</button>
            </div>

            <div className='sign_btn_block'>
                <button className='custom-btn btn btn-size' onClick={handleClickLogin} data-testid="sign_in">Sign in</button>
            </div>

        </div>
    )
} 