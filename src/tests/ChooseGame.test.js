import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import ChooseGame from '../ChooseGame'
import GameOptions from '../components/GameOptions';
import MakeBackgrounds from '../components/Backgrounds'
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe('Choose game component', () => {

    const games = MakeBackgrounds(); 
    const setGame = jest.fn();
    const game=games[0];    
    it('Renders', () => {
        const {container} = render(
            <Router>
                <ChooseGame game={game} setGame={setGame} />
            </Router>
        )
        expect(container).toMatchSnapshot();
    })
    it('Renders headings correctly', () => {

        render(
            <Router>
                <ChooseGame game={game} setGame={setGame} />
            </Router>
        )

        expect(screen.getAllByRole('heading')[0].textContent).toMatch('A.D.2222')
        expect(screen.getAllByRole('heading')[1].textContent).toMatch('Robot City')
        expect(screen.getAllByRole('heading')[2].textContent).toMatch('Universe 113')
    })
    it('Renders images correctly', () => {
        render(<GameOptions games={games} />)

        expect(screen.getAllByTestId('background')[0]).toHaveStyle(`background-image: url(${games[0].image})`)
        expect(screen.getAllByTestId('background')[1]).toHaveStyle(`background-image: url(${games[1].image})`)
        expect(screen.getAllByTestId('background')[2]).toHaveStyle(`background-image: url(${games[2].image})`)

        expect(screen.getAllByTestId('character')[0]).toHaveStyle(`background-image: url(${games[0].characters[0].image})`)
        expect(screen.getAllByTestId('character')[1]).toHaveStyle(`background-image: url(${games[0].characters[1].image})`)
        expect(screen.getAllByTestId('character')[2]).toHaveStyle(`background-image: url(${games[0].characters[2].image})`)

        expect(screen.getAllByTestId('character')[3]).toHaveStyle(`background-image: url(${games[1].characters[0].image})`)
        expect(screen.getAllByTestId('character')[4]).toHaveStyle(`background-image: url(${games[1].characters[1].image})`)
        expect(screen.getAllByTestId('character')[5]).toHaveStyle(`background-image: url(${games[1].characters[2].image})`)

        expect(screen.getAllByTestId('character')[6]).toHaveStyle(`background-image: url(${games[2].characters[0].image})`)
        expect(screen.getAllByTestId('character')[7]).toHaveStyle(`background-image: url(${games[2].characters[1].image})`)
        expect(screen.getAllByTestId('character')[8]).toHaveStyle(`background-image: url(${games[2].characters[2].image})`)
    })

    it('When clicked, button navigates to new page', () => {
        render(
            <Router>
                <ChooseGame game={game} setGame={setGame} />
            </Router>)

        const button = screen.getByRole('button', {name: 'Start'});
        const chosenGame = screen.getByText(/Robot City/i);

        act(() => {
            userEvent.click(chosenGame);
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
        });
        expect(window.location.pathname).toEqual('/play');
    })
})