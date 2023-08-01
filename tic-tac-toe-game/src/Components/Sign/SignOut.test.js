import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SignOut } from './SignOut';

describe('Sign Out events', () => {
    it('User write nickname', () => {
        render(<SignOut/>);

        fireEvent.change(screen.getByPlaceholderText(/enter your nickname/i),{
            target: {value: 'User'},
        })
    })

    it('User write email address', () => {
        render(<SignOut/>);

        fireEvent.change(screen.getByPlaceholderText(/enter your login/i),{
            target: {value: 'test@gmail.com'},
        })
    })


    it('User write password', () => {
        render(<SignOut/>);

        fireEvent.change(screen.getByPlaceholderText(/enter your password/i),{
            target: {value: 'mypassword'},
        })
    })

    
    test('User click button', () => {

      const handleClickRegistered = jest.fn();
      render(<SignOut handleClickRegistered={handleClickRegistered} />);
    
      const signOutButton = screen.getByRole('button', { name: /sign out/i });
    
      fireEvent.click(signOutButton);
      expect(handleClickRegistered).toHaveBeenCalled();
    });
    
})