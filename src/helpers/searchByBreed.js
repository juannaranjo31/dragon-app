import data from '../json/warriors.json';

export const searchByBreed = (breed) => {
    const {characters} = data;

    return characters.filter( (ch) => ch.race === breed );
}
