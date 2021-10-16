import data from '../json/warriors.json';

export const searchByBreed = (breed) => {
    const {characters} = data;

    if (breed === 'Any') {
        return characters;
    }

    return characters.filter( (ch) => ch.race === breed );
}
