import React from "react";
import { render, screen } from "@testing-library/react";
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

        expect(HK).not.toBeNull()
        expect(Yubaba).not.toBeNull()
        expect(Bowser).not.toBeNull()

    })
    // When character is found, display message after setTimeout
    // Timer updates every second
})
