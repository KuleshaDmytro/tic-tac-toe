import './../../style/Sign/sign.css'

export const ForgotPassword = ({isEmailCorrect, handleClickForgotPassword}) => {

    return(
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
    )
} 