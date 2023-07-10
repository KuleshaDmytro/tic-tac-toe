import './../../style/Sign/sign.css'

export const SignIn = () => {

    return (
        <div className='sign_card'>

            <span className='address'>Email address</span>

            <div className='input_wrapper'>
                <input type='login' className='input_login' placeholder='Login'/>
                <input type='password' className='input_password' placeholder='Password'/>
            </div>

            <span className='forgot_password'>Forgot password?</span>

            <div className='sign_btn_block'>
                    <button className='custom-btn btn btn-size'>Sign in</button>
            </div>

        </div>
    )
} 