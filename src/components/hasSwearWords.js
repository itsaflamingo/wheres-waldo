export default function hasSwearWords(name, setInputError) {
    const LC = name.toLowerCase();

    if( LC.includes('shit') || 
        LC.includes('fuck') || 
        LC.includes('cunt') || 
        LC.includes('asshole') || 
        LC.includes('bitch') || 
        LC.includes('dick') || 
        LC.includes('nigger') || 
        LC.includes('nazi') || 
        LC.includes('balls') || 
        LC.includes('suck')) {
            setInputError("Sorry, can't use that word!");
            return true;
    }
    else {
        return false;
    }
}