// Div appears where click event happens on page
const setDivPosition = (e, displayCharacters, charDiv) => {

    e.stopPropagation();

    if(displayCharacters === false || charDiv === undefined || charDiv === null) return;
    const x = e.pageX;
    const y = e.pageY;
    
    charDiv.style.top = y + 'px';
    charDiv.style.left = x + 'px';
  }

export {setDivPosition};