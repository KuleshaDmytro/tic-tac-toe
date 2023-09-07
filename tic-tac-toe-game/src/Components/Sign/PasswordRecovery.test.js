import { PasswordRecovery} from "./PasswordRecovery";
import { SignIn } from "./SignIn";
import { 
    render, 
    screen,
    fireEvent,
    act } from '@testing-library/react';
import {
  BrowserRouter,
    MemoryRouter
  } from "react-router-dom";



describe('Password recovery', () => {
    it('Сhecking if the component PasswordRecovery has been rendered', () => {
        render(<MemoryRouter><PasswordRecovery/></MemoryRouter>);
        const passwords = screen.getAllByTestId(/password/i);
        
        expect(screen.getByPlaceholderText(/code/i)).toBeInTheDocument();
        expect(passwords[0]).toBeInTheDocument();
        expect(passwords[1]).toBeInTheDocument();

    })
    it('Changing the component when clicking the Return to login" button', () => {

        const { getByTestId } = render(
            <BrowserRouter initialEntries={['sign/forgot_password/password_recovery']}>
              <PasswordRecovery />
            </BrowserRouter>
          );
        
          const button = getByTestId('return_to_signIn');
          fireEvent.click(button);

          act(() => {
            const element = screen.getByText(/Sign in/i);
            expect(element).toBeInTheDocument();
          })
                  
    })
})
// Добавити тест якщо юзер авторизувався то перекинути його на початкову сторінку