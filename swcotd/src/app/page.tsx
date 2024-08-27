import { CharacterCard } from './components/character-card';
import { Character } from './types/character.type';
import { PagedResponse } from './types/paged-response.type';

const fetchRelatedData = (character: Character) => {
    const requests = [];

    requests.push(fetch(character.homeworld).then(response => response.json()));

    requests.push(...character.species.map((species) => {
        return fetch(species).then(response => response.json());
    }));
    return Promise.all(requests);
};

export default async function Cotd() {
    const characterData = await fetch('https://swapi.dev/api/people');
    const firstPage: PagedResponse<Character> = await characterData.json();
    const characterCount = firstPage.count;
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const cotdId = Math.floor(Date.now() / MS_PER_DAY) % characterCount;

    const cotdResponse = await fetch(`https://swapi.dev/api/people/${cotdId}`);
    const cotd: Character = await cotdResponse.json();

    const [homeworld, ...species] = await fetchRelatedData(cotd);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CharacterCard character={cotd} id={cotdId} species={species} homeworld={homeworld} />
        </main>
    );
}
