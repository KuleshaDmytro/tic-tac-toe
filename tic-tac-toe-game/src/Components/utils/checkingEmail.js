
export const checking_email =  (setEmailCorrect) => {

    const email_element = document.querySelectorAll(".checking_login");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    checking(email_element, emailRegex, setEmailCorrect)

}

const checking = (elements, regex, setValue) => {
    elements.forEach((el) => {
        let value = el.value;
        if (!regex.test(value)) {
            el.classList.remove('correct_input');
            el.classList.add('incorrect_input');
            setValue(false)
        }else{
            el.classList.add('correct_input');
            el.classList.remove('incorrect_input');
            setValue(true)
        }
    })
}