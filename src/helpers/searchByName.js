import data from '../json/warriors.json';

export const searchByName = (name) => {
    const {characters} = data;
    
    return characters.find( (ch) => ch.id === name.toLowerCase() );
}
