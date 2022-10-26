import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from 'react-router-dom';
import ChooseGame from '../ChooseGame'
import SetGame from '../components/SetGame';
import MakeBackgrounds from '../components/Backgrounds'
import { act } from "react-dom/test-utils";

describe('Game page', () => {
    const games = MakeBackgrounds();
    const game = games[0]
    it('Renders game page', () => {
        const {container} = render(<SetGame game={game} />)
        expect(container).toMatchSnapshot();
    })
    it('Background must have src attribute with correct image', () => {
        render(<SetGame game={game} />)
    
        expect(screen.getByRole('img')).toHaveAttribute('src', `${game.image}`)
    })
    it('When clicked, displays character list', () => {
        render(<SetGame game={game} />)

        const background = screen.getByTestId('background')
        
        userEvent.click(background);

        const HK = screen.queryByText(/Hollow Knight/i);
        const Yubaba = screen.queryByText(/Yubaba/i);
        const Bowser = screen.queryByText(/Bowser/i);

        expect(HK).not.toBeNull();
        expect(Yubaba).not.toBeNull();
        expect(Bowser).not.toBeNull();
    })
    // it('Character found message displays after character is clicked', () => {
    //     render(<SetGame game={game} />)

    //     const background = screen.getByTestId('background')
    //     fireEvent.mouseMove(background, { clientX: 1195, clientY: 12456 });

    //     userEvent.click(background);

    //     const HK = screen.queryByText(/Hollow Knight/i);
    //     userEvent.click(HK);
    //     const msg = screen.queryByText(/You found Hollow Knight!/i);
    //     expect(msg).not.toBeNull();
    // })
    // Timer updates every second
})
