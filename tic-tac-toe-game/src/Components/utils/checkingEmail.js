import { setClassOnInputs } from "./setClassOnInputs";

export const checking_email =  () => {

    const email_element = document.querySelectorAll(".checking_login");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isCorrect = setClassOnInputs(email_element, emailRegex)

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

// const setWarningSentence = (isCorrect, element) => {
    
//     if (!isCorrect) {

//         let card = document.createElement('span');
//         card.classList.add('incorrect')
//         card.innerText = `email is incorrect`
//         element.parentElement.append(card);
    
//     }

// }