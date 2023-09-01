import { checking_email } from './checkingEmail';

describe('checking_email', () => {
    let setEmailCorrect;
    let emailElement;

    beforeEach(() => {
        setEmailCorrect = jest.fn();
        emailElement = document.createElement('input');
        emailElement.classList.add('checking_login');

        document.body.appendChild(emailElement);
    });

    afterEach(() => {
        document.body.removeChild(emailElement);

    });

    it('should set setEmailCorrect to true if email is valid', () => {
        emailElement.value = 'test@example.com';

        checking_email(setEmailCorrect);

        expect(setEmailCorrect).toHaveBeenCalledWith(true);
        expect(emailElement.classList).toContain('correct_input');
        expect(emailElement.classList).not.toContain('incorrect_input');

    });

    it('should set setEmailCorrect to false if email is invalid', () => {
        emailElement.value = 'invalid_email';

        checking_email(setEmailCorrect);

        expect(setEmailCorrect).toHaveBeenCalledWith(false);
        expect(emailElement.classList).toContain('incorrect_input');
        expect(emailElement.classList).not.toContain('correct_input');
    });
});
