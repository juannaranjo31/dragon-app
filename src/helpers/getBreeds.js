import data from '../json/warriors.json';

export const getBreeds = () => {
    const {characters} = data;
    const breeds = [...new Set( characters.map( (ch) => ch.race ) )];

    return breeds;
}
