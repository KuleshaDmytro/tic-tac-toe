import { useState } from 'react'
import './../../style/Sign/sign.css'
import './../../style/startAgain.css'
import { SignIn } from './SignIn'
import { SignOut } from './SignOut'


export const Sign = () => {

    const [activeBtn, setActiveBtn] = useState(true);

    const handleClickSignIn = () => {
        setActiveBtn(true);
    }

    const handleClickSignOut = () => {
        setActiveBtn(false);
    }

    return(
        <>
            <div className="sign_nav">
               <div className='sign_container'>

                <div className='change_sign'>

                        <button className={`sign ${activeBtn ? 'active': ''}`} onClick={handleClickSignIn}>Sign in</button>

                        <button className={`sign ${activeBtn ? '': 'active'}`} onClick={handleClickSignOut}>Sign up</button>

                </div>

                {activeBtn ? <SignIn/> : <SignOut/>}

                    
               </div>
         
            </div>
        </>
    )
}