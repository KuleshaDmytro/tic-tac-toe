export const checking_password =  (setPasswordCorrect) => {

    const password_element = document.querySelectorAll(".checking_password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    checking(password_element, passwordRegex, setPasswordCorrect)

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