import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { aCharacter } from '../types/character.type';
import { aPlanet } from '../types/planet.type';
import { aSpecies } from '../types/species.type';
import { CharacterCard } from './character-card';

test('Character Card', () => {
    const character = aCharacter();
    const homeworld = aPlanet();
    const species = aSpecies();

    render(<CharacterCard character={character} id={1} species={[species]} homeworld={homeworld} />);
    expect(screen.getByRole('heading', { name: character.name })).toBeVisible();
});
