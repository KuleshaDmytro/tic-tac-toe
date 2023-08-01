// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './../../style/Sign/sign.css'
// import './../../style/Game/button.css'
// import { SignIn } from './SignIn'
// import { SignOut } from './SignOut'
// import { ForgotPassword } from './ForgotPassword'
// import { PasswordRecovery } from './PasswordRecovery'
// import { Outlet } from "react-router-dom"


// export const Sign = () => {

//     const [activeBtn, setActiveBtn] = useState(true);
//     const [isEmailCorrect, setEmailCorrect] = useState(true);
//     const [isPasswordCorrect, setPasswordCorrect] = useState(true);

//     const checking_email = () => {
//         const email_element = document.querySelectorAll(".checking_login");
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         console.log(email_element);
//         checking(email_element, emailRegex, setEmailCorrect)

//     }

//     const checking_password = () => {
//         const password_element = document.querySelectorAll(".checking_password");
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//         checking(password_element, passwordRegex, setPasswordCorrect)

//     }

//     const checking = (elements, regex, setValue) => {
//         elements.forEach((el) => {
//             let value = el.value;
//             if (!regex.test(value)) {
//                 el.classList.remove('correct_input');
//                 el.classList.add('incorrect_input');
//                 setValue(false)
//             }else{
//                 el.classList.add('correct_input');
//                 el.classList.remove('incorrect_input');
//                 setValue(true)
//             }
//         })
//     }


//     const handleClickLogin = () => {
//         checking_email();
//         checking_password();
//         console.log('The user has logged');
//     }

//     const handleClickRegistered = () => {
//         checking_email();
//         checking_password();
//         console.log('The user has registered');
//     }

//     const handleClickForgotPassword = () => {
//         checking_email();
//         console.log(isEmailCorrect);
//         if (isEmailCorrect) {
            
//             passwordRecovery();
//         }
//     }

//     const handleClickSignIn = () => {

//         setActiveBtn(true);
//     }

//     const handleClickSignOut = () => {

//         setActiveBtn(false);
//     }



//     return(
//             <div className="sign_nav">
//                <div className='sign_container'>

//                     <div className='change_sign'>

//                     <Link to={'/sign/in'}>
//                         <button className={`sign ${activeBtn ? 'active': ''}`} onClick={handleClickSignIn}>Sign in</button>
//                     </Link>

//                     <Link to={'/sign/up'}>
//                         <button className={`sign ${activeBtn ? '': 'active'}`} onClick={handleClickSignOut}>Sign up</button>
//                     </Link>
//                     </div>


//                     <Outlet />

//                </div>
         
//             </div>

//     )
// }