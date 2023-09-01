export const setClassOnInputs = (elements, regex, isSame = true) => {
    let isCorrect = false;
    elements.forEach((el) => {
        let value = el.value;

        if (!regex.test(value) || !isSame) {
            el.classList.remove('correct_input');
            el.classList.add('incorrect_input');
            isCorrect = false;
        }else{
            el.classList.add('correct_input');
            el.classList.remove('incorrect_input');
            isCorrect = true;
        }
    })

    return isCorrect
}