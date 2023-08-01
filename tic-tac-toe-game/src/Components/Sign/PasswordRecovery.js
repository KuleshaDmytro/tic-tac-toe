import './../../style/Modal/modal.css'

export const PasswordRecovery = ({handleClickLogin}) => {

    return(
        <div className='sign_card'>

          
            <div className='input_wrapper'>

                <div className='card margin_title'>
                    <input type='login' className='checking_login correct_input input_style ' placeholder='Code'/>
                    {/* {!isEmailCorrect && 
                        <span className='incorrect'>email is incorrect</span>} */}
                </div>

                        
                <div className='card'>
                    <input type='password' className='checking_password correct_input input_style' placeholder='Password'/>
                    {/* {!isPasswordCorrect && 
                        <span className='incorrect'>password is incorrect</span>} */}
                </div>
                <div className='card'>
                    <input type='password' className='checking_password correct_input input_style' placeholder='Enter the password again'/>
                    {/* {!isPasswordCorrect && 
                        <span className='incorrect'>password is incorrect</span>} */}
                </div>
            </div>

            <div className='fp_card'>
                <button className='forgot_password'>Return to login</button>
            </div>

            <div className='sign_btn_block'>
                <button className='custom-btn btn btn-size' data-testid="sign_in" onClick={handleClickLogin}>Remember password</button>
            </div>

        </div>
    )
}