// Check if selected location corresponds to saved character location
const checkIfCharacter = (obj, name, pointer, checkIfFound, charactersFound, setCharactersFound) => {
    const location = obj[name].location;

    if(((pointer.x + 120) > location.x &&
        (pointer.x - 120) < location.x) && 
        (pointer.y + 120) > location.y &&
        (pointer.y - 120) < location.y) {
      checkIfFound(charactersFound, setCharactersFound, name);
    }
    else {
        return null;
    }
  }

export default checkIfCharacter;