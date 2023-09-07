import { Header } from "./Header";
import { 
    render, 
    screen,
    fireEvent,
    act } from '@testing-library/react';
import {
  BrowserRouter,
    MemoryRouter
  } from "react-router-dom";
import userEvent from "@testing-library/user-event"; 


describe('Headers', () => {
    it('Click on "Play Game" button ', () => {
        const { getByTestId} = 
        render(
                <Header/>
              );

        const play_game = getByTestId('Play_Game_main');

        act(() => {
            userEvent.click(play_game);
        })

        expect(window.location.pathname).toBe('/')
    })

    it('Click on "About us" button ', () => {
        const { getByTestId} = 
        render(
                <Header/>
              );

        const about_us = getByTestId('About_us_main');

        act(() => {
            userEvent.click(about_us);
        })

        expect(window.location.pathname).toBe('/about-us')
    })

    it('Click on "Play Game" button ', () => {
        const { getByTestId} = 
        render(
                <Header/>
              );

        const sign_in = getByTestId('Sign_in_main');

        act(() => {
            userEvent.click(sign_in);
        })

        expect(window.location.pathname).toBe('/sign/in')
    })
})