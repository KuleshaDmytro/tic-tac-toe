import {
    render, 
    screen, 
    fireEvent } from '@testing-library/react';
import { SignIn } from './SignIn';
import userEvent from '@testing-library/user-event';
import {
    MemoryRouter, Routes
  } from "react-router-dom";
import { ForgotPassword } from './ForgotPassword';
import { act } from 'react-dom/test-utils';

describe('Sign In events', () => {
    it('User write login', () => {
        render(<MemoryRouter><SignIn/></MemoryRouter>);
    
        const login_input = screen.getByPlaceholderText(/login/i);
        userEvent.type(login_input, 'test@gmail.com');
        expect(login_input.value).toBe('test@gmail.com');
    });
    

    it('User write password', () => {
        render(<MemoryRouter ><SignIn/></MemoryRouter>);
    
        const password_input = screen.getByPlaceholderText(/password/i);
        userEvent.type(password_input, 'mypassword');
        expect(password_input.value).toBe('mypassword');
    });
    

    it('User click button', () => {
        render(<MemoryRouter ><SignIn /></MemoryRouter>);
    
        const sign_in_btn = screen.getByTestId('sign_in');
        
        fireEvent.click(sign_in_btn);
    
        const eamilIsIncorrect = screen.getByText(/email is incorrect/i);
        const passwordIsIncorrect = screen.getByText(/password is incorrect/i)

        expect(eamilIsIncorrect).toBeVisible();
        expect(passwordIsIncorrect).toBeVisible();
    });
    

    it('User click forgot password', () => {
        render(
            <MemoryRouter initialEntries={['/sign/in']}>
                <SignIn />
            </MemoryRouter>);
            

        const forgot_password = screen.getByTestId('forgot_password');
        fireEvent.click(forgot_password);

        act(() => {
            const element = screen.getByTestId('forgot_password');
            expect(element).toBeInTheDocument();
        })
        
        // expect(window.location.pathname).toBe('/sign/forgot_password');
    })
})