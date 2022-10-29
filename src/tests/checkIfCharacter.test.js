import checkIfCharacter from "../components/checkIfCharacter";

describe('checkIfCharacter', () => {
    const obj = {
        'Hollow Knight': {
            name: 'Hollow Knight',
            location: {x: 1195, y: 12456}
        },
        'Yubaba': {
            name: 'Yubaba',
            location: {x: 1038, y: 5173}
        }}
    it('When Hollow Knight is clicked, function does not return null && checkIfFound executes', () => {
        const pointer = {x: 1195, y: 12456};
        const checkIfFound = jest.fn();
        const charactersFound = [];
        const setCharactersFound = jest.fn();
    
        expect(checkIfCharacter(obj, obj['Hollow Knight'].name, pointer, checkIfFound, charactersFound, setCharactersFound)).not.toBeNull();
    
        expect(checkIfFound).toHaveBeenCalled();
    }) 
    it('When Yubaba is clicked, function does not return null && checkIfFound executes', () => {
        const pointer = {x: 1038, y: 5173};
        const checkIfFound = jest.fn();
        const charactersFound = [];
        const setCharactersFound = jest.fn();
    
        expect(checkIfCharacter(obj, obj.Yubaba.name, pointer, checkIfFound, charactersFound, setCharactersFound)).not.toBeNull();
    
        expect(checkIfFound).toHaveBeenCalled();
    }) 
    it('When character is not clicked, function returns null', () => {
        const pointer = {x: 10, y: 10};
        const checkIfFound = jest.fn();
        const charactersFound = [];
        const setCharactersFound = jest.fn();
    
        expect(checkIfCharacter(obj, obj.Yubaba.name, pointer, checkIfFound, charactersFound, setCharactersFound)).toBeNull();
    
        expect(checkIfFound).not.toHaveBeenCalled();
    })
    it('When coordinate near character is clicked, function does not return null && checkIfFound executes', () => {
        const pointer = {x: 1039, y: 5174};
        const checkIfFound = jest.fn();
        const charactersFound = [];
        const setCharactersFound = jest.fn();
    
        expect(checkIfCharacter(obj, obj.Yubaba.name, pointer, checkIfFound, charactersFound, setCharactersFound)).not.toBeNull();
    
        expect(checkIfFound).toHaveBeenCalled();
    }) 
})
