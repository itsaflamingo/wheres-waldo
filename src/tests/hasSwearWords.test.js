import hasSwearWords from "../components/hasSwearWords";
import "@testing-library/jest-dom";  // optional

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
    it('returns false if not called with swear words', () => {
        expect(hasSwearWords('hi', fn)).toBe(false);
        expect(hasSwearWords('this', fn)).toBe(false);
        expect(hasSwearWords('so', fn)).toBe(false);
        expect(hasSwearWords('funt', fn)).toBe(false);
    })
    it('returns true if includes swear words', () => {
        expect(hasSwearWords('sofuck', fn)).toBe(true);
        expect(hasSwearWords('shitthis', fn)).toBe(true);
        expect(hasSwearWords('ballsss', fn)).toBe(true);
        expect(hasSwearWords('cuntname', fn)).toBe(true);
    })
})