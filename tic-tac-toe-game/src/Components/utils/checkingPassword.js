import { setClassOnInputs } from "./setClassOnInputs";

export const checking_password =  (isSame) => {

    const password_element = document.querySelectorAll(".checking_password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isCorrect = setClassOnInputs(password_element, passwordRegex, isSame)
    
    return isCorrect;
}

// const checking = (elements, regex) => {
//     let isCorrect = false;

//     elements.forEach((el) => {
//         let value = el.value;
//         if (!regex.test(value)) {
//             el.classList.remove('correct_input');
//             el.classList.add('incorrect_input');
//             isCorrect = false;

//         }else{
//             el.classList.add('correct_input');
//             el.classList.remove('incorrect_input');
//             isCorrect = true;
//         }
//     })

//     return [isCorrect];
// }
