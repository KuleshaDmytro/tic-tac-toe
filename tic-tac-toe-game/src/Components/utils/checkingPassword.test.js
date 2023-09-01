import { checking_password } from "./checkingPassword";

describe('checking password', () => {
    let setPasswordCorrect;
    let passwordElement;
    
    beforeEach(() => {
        setPasswordCorrect = jest.fn();
        passwordElement = document.createElement('input');
        passwordElement.classList.add('checking_password');

        document.body.appendChild(passwordElement);
    })

    afterEach(() => {
        document.body.removeChild(passwordElement);
    })

    it('should set setPasswordCorrect to true if password is valid', () => {
        passwordElement.value = 'Aa123456'

        checking_password(setPasswordCorrect)

        expect(setPasswordCorrect).toHaveBeenCalledWith(true);
        expect(passwordElement.classList).toContain('correct_input');
        expect(passwordElement.classList).not.toContain('incorrect_input');

    })

    it('should set setPasswordCorrect to false if password is invalid', () => {
        passwordElement.value = 'GG/WP'

        checking_password(setPasswordCorrect)

        expect(setPasswordCorrect).toHaveBeenCalledWith(false);
        expect(passwordElement.classList).toContain('incorrect_input');
        expect(passwordElement.classList).not.toContain('correct_input');

    })
})