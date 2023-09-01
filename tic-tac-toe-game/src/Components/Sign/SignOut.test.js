import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SignOut } from './SignOut';
import {
    MemoryRouter
  } from "react-router-dom";

describe('Sign Out events', () => {
    it('User write nickname', () => {
        const { getByPlaceholderText } = render(<MemoryRouter><SignOut/></MemoryRouter>);

        fireEvent.change(screen.getByPlaceholderText(/enter your nickname/i),{
            target: {value: 'User'},
        })
    })

    it('User write email address', () => {
        render(<MemoryRouter><SignOut/></MemoryRouter>);

        fireEvent.change(screen.getByPlaceholderText(/enter your login/i),{
            target: {value: 'test@gmail.com'},
        })
    })


    it('User write password', () => {
        render(<MemoryRouter><SignOut/></MemoryRouter>);

        fireEvent.change(screen.getByPlaceholderText(/enter your password/i),{
            target: {value: 'mypassword'},
        })
    })

    
    test('User click button', () => {
        render(<MemoryRouter><SignOut /></MemoryRouter>);

        const signOutButton = screen.getByTestId('sign_up');

        fireEvent.click(signOutButton);

        const errorSpan = screen.getByText('email is incorrect');
        expect(errorSpan).toBeVisible();
        
    });
    
})