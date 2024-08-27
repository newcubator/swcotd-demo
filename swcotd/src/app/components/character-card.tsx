import Image from 'next/image';
import { Character } from '../types/character.type';
import { Planet } from '../types/planet.type';
import { Species } from '../types/species.type';

type CharacterCardProps = { character: Character, id: number, species: Array<Species>, homeworld: Planet };

const genderSymbols: Record<string, string> = {
    'male': '♂',
    'female': '♀',
    'unknown': '',
    'n/a': '',
};

export const CharacterCard = ({ character, id, species, homeworld }: CharacterCardProps) => {
    return (
        <div className="rounded-xl bg-cyan-50 flex flex-row flex-nowrap items-stretch">
            <div className="h-[550px] shrink-0">
                <Image src={`/people/${id}.jpg`}
                       width={400}
                       height={550}
                       alt="{cotd.name}"
                       priority />
            </div>
            <div className="px-4 py-6 flex flex-col flex-nowrap grow min-w-[320px]">
                <h1 className="font-normal text-3xl flex justify-between self-center">
                    {character.name}
                </h1>
                <div className="flex gap-2 items-center mb-6 font-light self-center">
                    <span>{genderSymbols[character.gender]}</span>
                    <span>
                        {species.map(({ name }) => name).join(', ')}
                    </span>
                </div>
                <div className="mb-6 self-center">

                </div>
                <span>
                    Geboren {character.birth_year}
                </span>
                <span>
                    Hautfarbe: {character.skin_color}
                </span>
                <span>
                    Augenfarbe: {character.eye_color}
                </span>
                <span>
                    Haarfarbe: {character.hair_color}
                </span>
                <span>
                Heimat: {homeworld.name}
                </span>

                <div className="flex flex-row flex-nowrap w-full mt-auto">
                    <div className="flex flex-row flex-nowrap grow justify-center items-center gap-3 border-r-black border-r-2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width={32}
                             height={32}
                             viewBox="0 0 24 24">
                            <title>human-male-height</title>
                            <path d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21" />
                        </svg>
                        <span className="text-2xl">{character.height}cm</span>
                    </div>
                    <div className="flex flex-row flex-nowrap grow justify-center items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width={32}
                             height={32}
                             viewBox="0 0 24 24">
                            <title>weight-kilogram</title>
                            <path d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H8V16.5L9,17.5V19H11V17L9,15L11,13V11H9V12.5L8,13.5V11H6M15,11C13.89,11 13,11.89 13,13V17C13,18.11 13.89,19 15,19H18V14H16V17H15V13H18V11H15Z" />
                        </svg>
                        <span className="text-2xl">{character.mass}kg</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
