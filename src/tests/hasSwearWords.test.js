import hasSwearWords from "../components/hasSwearWords";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe('hasSwearWords function', () => {
    const fn = jest.fn();
    it('returns true if called with swear words', () => {
        expect(hasSwearWords('shit', fn)).toBe(true);
        expect(hasSwearWords('suck', fn)).toBe(true);
        expect(hasSwearWords('fuck', fn)).toBe(true);
        expect(hasSwearWords('cunt', fn)).toBe(true);
        expect(hasSwearWords('asshole', fn)).toBe(true);
        expect(hasSwearWords('balls', fn)).toBe(true);
    })
})