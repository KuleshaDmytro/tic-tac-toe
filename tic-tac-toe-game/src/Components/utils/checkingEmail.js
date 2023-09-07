import { setClassOnInputs } from "./setClassOnInputs";

export const checking_email =  () => {

    const email_element = document.querySelectorAll(".checking_login");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isCorrect = setClassOnInputs(email_element, emailRegex)

    return isCorrect;
}
