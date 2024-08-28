import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { fetchPeople, getCharacter, randomCharacterId } from './api/people';
import { getRelated } from './api/related';
import { CharacterCard } from './components/character-card';
import { Character } from './types/character.type';
import { Planet } from './types/planet.type';
import { Species } from './types/species.type';

const fetchRelatedData = (character: Character): Promise<[Planet, ...Species[]]> => {
    const requests = [];
    requests.push(getRelated(character.homeworld));
    requests.push(...character.species.map((species) => getRelated(species)));

    return Promise.all(requests) as Promise<[Planet, ...Species[]]>;
};

export default async function Cotd() {
    const StarWarsMap = useMemo(() => dynamic(
        () => import('@/app/components/star-wars-map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), []);

    const firstPage = await fetchPeople();
    const cotdId = randomCharacterId(firstPage.count)
    const cotd: Character = await getCharacter(cotdId);

    const [homeworld, ...species] = await fetchRelatedData(cotd);

    return (
        <main className="flex w-[100vw] h-[100vh]">
            <div className="flex flex-col items-start justify-end w-full h-full px-3 py-4 relative z-[401] pointer-events-none">
                <CharacterCard character={cotd}
                               species={species}
                               homeworld={homeworld}
                               id={cotdId}/>
            </div>
            <StarWarsMap focusedPlanet={homeworld.name} />
        </main>
    );
}
