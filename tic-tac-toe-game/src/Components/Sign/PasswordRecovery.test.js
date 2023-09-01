import { PasswordRecovery} from "./PasswordRecovery";
import { SignIn } from "./SignIn";
import { 
    render, 
    screen,
    fireEvent,
    act } from '@testing-library/react';
import {
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
        // render(<MemoryRouter><PasswordRecovery/></MemoryRouter>);
        // const button = screen.getByTestId('return_to_signIn');
        // expect(button).toBeInTheDocument();
 
        // fireEvent.click(button);

        // render(<MemoryRouter><SignIn/></MemoryRouter>)
        // const signIn_component =screen.getByTestId('signIn_component')
        // screen.debug()
        // expect(signIn_component).toBeInTheDocument();
        // expect(screen.getByTestId('return_to_signIn')).not.toBeInTheDocument();

        // const history = createMemoryHistory();
        // render(
        //     <MemoryRouter >
        //         <PasswordRecovery />
        //     </MemoryRouter>
        //   );
        
        //   const returnToSignInButton = getByTestId('return_to_signIn');
        //   fireEvent.click(returnToSignInButton);
        
        // expect(container.innerHTML).toMatch('Sign in')
        // //   expect(window.location.pathname).toBe('/sign/in');

        const { getByTestId } = render(
            <MemoryRouter>
              <PasswordRecovery />
            </MemoryRouter>
          );
        
          const button = getByTestId('return_to_signIn');
          act(() => {

              fireEvent.click(button);
          })
        
          // Дочекайтеся асинхронної зміни URL перед перевіркою
         
            expect(window.location.pathname).toBe('/sign/in');
          
    })
})
// Добавити тест якщо юзер авторизувався то перекинути його на початкову сторінку