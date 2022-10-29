
// Cross-reference with characters already found. If already found, do nothing, else add to charactersFound
const checkIfFound = (charactersFound, setCharactersFound, name) => {
    if(charactersFound.includes(name)) return;
    setCharactersFound(() => charactersFound.concat(name));
  }

export default checkIfFound;