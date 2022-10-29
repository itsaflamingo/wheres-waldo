import { retrieve } from "./firebaseConfig";
import checkIfCharacter from "./checkIfCharacter";

// If character clicked, send to checkIfCharacter
const getChosenCharacter = async (e, background, pointer, checkIfFound, charactersFound, setCharactersFound) => {
    const id = e.target.id;
    const chosenCharacter = background.characters.filter(char => char.name === id);
    const dbChar = await retrieve(chosenCharacter[0].name);
    checkIfCharacter(dbChar, id, pointer, checkIfFound, charactersFound, setCharactersFound);
  }

  export {getChosenCharacter};