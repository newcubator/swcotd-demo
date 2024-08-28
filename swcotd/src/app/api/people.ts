import { Character } from '../types/character.type';
import { PagedResponse } from '../types/paged-response.type';

export const fetchPeople = async (page = 1): Promise<PagedResponse<Character>> => {
    const characterResponse = await fetch(`https://swapi.dev/api/people?page=${page}`);
    return characterResponse.json();
};

export const getCharacter = async (characterId: number): Promise<Character> => {
    const characterResponse = await fetch(`https://swapi.dev/api/people/${characterId}`);
    return characterResponse.json();
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;
export const getCharacterIdOfTheDay = (characterCount: number) => {
    return Math.abs(Math.floor(Date.now() / MS_PER_DAY) % characterCount);
};
