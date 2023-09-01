export const checkIfThePasswordIsTheSame = () => {
    let passwordInputs = document.querySelectorAll('.checking_password');
    let passwordArray = Array.from(passwordInputs);
    let result = passwordArray.map(element => {
 
        return element.value; 
    });

    const isSame = condition(result);

    return [isSame, passwordInputs];    
}

const condition = (element) => {
   const isSame =  element.every((item) => {
    let value = item === element[0]
   
    if (item.length === 0) {
        value = false
    }
    return value;
});
   return isSame;
}