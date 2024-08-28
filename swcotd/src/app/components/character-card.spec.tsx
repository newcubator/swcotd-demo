import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { aCharacter } from '../types/character.type';
import { aPlanet } from '../types/planet.type';
import { aSpecies } from '../types/species.type';
import { CharacterCard } from './character-card';

describe('Character Card', () => {
    test('should render the card layout', () => {
        const character = aCharacter();
        const homeworld = aPlanet();
        const species = aSpecies();

        render(<CharacterCard character={character} id={1} species={[species]} homeworld={homeworld} />);

        expect(screen.getByRole('img', { name: character.name })).toBeVisible();
        expect(screen.getByRole('heading', { name: character.name })).toBeVisible();
        expect(screen.getByRole('region', { name: 'gender and species' })).toBeVisible();
        expect(screen.getByRole('region', { name: 'birth' })).toBeVisible();
        expect(screen.getByRole('region', { name: 'body colors' })).toBeVisible();
        expect(screen.getByRole('region', { name: 'body specs' })).toBeVisible();
    });
});
