import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from 'react-router-dom';
import SetGame from '../components/SetGame';
import MakeBackgrounds from '../components/Backgrounds'
import Timer from '../components/Timer'
import { act } from "react-dom/test-utils";

describe('Game page', () => {
    const games = MakeBackgrounds();
    const game = games[0];
    jest.useFakeTimers();

    it('Renders game page', () => {
        const {container} = render(
            <Router>
                <SetGame game={game} />
            </Router>)
        expect(container).toMatchSnapshot();
    })
    it('Background must have src attribute with correct image', () => {
        render( <Router>
                    <SetGame game={game} />
                </Router>)
    
        expect(screen.getByRole('img')).toHaveAttribute('src', `${game.image}`)
    })
    it('When clicked, displays character list', () => {
        render( <Router>
                    <SetGame game={game} />
                </Router>)

        const background = screen.getByTestId('background');
        
        userEvent.click(background);

        const HK = screen.queryByText(/Hollow Knight/i);
        const Yubaba = screen.queryByText(/Yubaba/i);
        const Bowser = screen.queryByText(/Bowser/i);

        expect(HK).not.toBeNull();
        expect(Yubaba).not.toBeNull();
        expect(Bowser).not.toBeNull();
    })
    it('Leaderboard button is displayed when clicked once', () => {
        render( <Router>
                    <SetGame game={game} />
                </Router>)

        const btn = screen.getByRole('button', {name: 'Leaderboard'});

        userEvent.click(btn);
        userEvent.click(btn);
        const leaderboard = screen.queryByText(/Score/i);

        expect(btn).not.toBeNull();
        expect(leaderboard).not.toBeNull();
    })
    it('Leaderboard button is not displayed when clicked twice', () => {
        render( <Router>
            <SetGame game={game} />
        </Router>)

        const btn = screen.getByRole('button', {name: 'Leaderboard'});

        userEvent.click(btn)
        userEvent.click(btn)
        userEvent.click(btn);

        const leaderboard = screen.queryByText(/Score/i);
        expect(leaderboard).toBeNull();
    })
    it('Timer renders correctly', () => {
        render( <Router>
            <SetGame game={game} />
        </Router>)

        
    })
    it('Timer updates correctly for minutes & seconds', () => {
        render(<Timer />)

        jest.useFakeTimers();
        act(() => {
            jest.advanceTimersByTime(3000);
        })
        const timer = screen.getByTestId('timer');
        expect(timer.textContent).toBe('00:00:03');

        act(() => {
            jest.advanceTimersByTime(10000);
        })
        expect(timer.textContent).toBe('00:00:13');

        act(() => {
            jest.advanceTimersByTime(50000);
        })

        expect(timer.textContent).toBe('00:01:03');
    })
})
