import './../../style/Sign/sign.css'

export const SignOut = () => {

    return (
        <div className='sign_card'>




                <span className='address'>Nickname</span>

                <div className='input_wrapper'>
                    <input className='input_login' placeholder='Enter your nickname'/>
                </div>
                

                <span className='address'>Email address</span>

                <div className='input_wrapper'>
                    <input className='input_login' placeholder='Enter your login'/>
                    <input className='input_password' placeholder='Enter your password'/>
                </div>

              


                <div className='sign_btn_block'>
                    <button className='custom-btn btn btn-size'>Sign out</button>
                </div>

        </div>
    )
} 