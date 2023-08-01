import './../../style/Sign/sign.css'

export const SignOut = ({handleClickRegistered, isEmailCorrect, isPasswordCorrect}) => {

    return (
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
                    <button className='custom-btn btn btn-size' data-testid="sign_out" onClick={handleClickRegistered}>Sign out</button>
                </div>

        </div>
    )
} 