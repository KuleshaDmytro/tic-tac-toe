import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SignIn } from './SignIn';

describe('Sign In events', () => {
    it('User write login', () => {
        render(<SignIn/>);

        fireEvent.change(screen.getByPlaceholderText(/login/i),{
            target: {value: 'test@gmail.com'},
        })
        // screen.debug();
    })

    it('User write password', () => {
        render(<SignIn/>);

        fireEvent.change(screen.getByPlaceholderText(/password/i),{
            target: {value: 'mypassword'},
        })
        // screen.debug();
    })

    it('User click button', () => {
        const handleClickLogin = jest.fn();
        render(<SignIn handleClickLogin={handleClickLogin} />);

        const sign_in_btn = screen.getByTestId('sign_in'); 

        fireEvent.click(sign_in_btn);
        expect(handleClickLogin).toHaveBeenCalled();
        // screen.debug();
    })

    it('Show forgot password page', () => {

    })
})