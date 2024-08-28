import { expect, test, vi } from 'vitest';
import { getCharacterIdOfTheDay } from './people';

const testCases = [
    { time: 1724803200000, count: 10, id: 3 },
    { time: 1724889600000, count: 10, id: 4 },
    { time: 1724803200000, count: 1, id: 0 },
    { time: 1724803200000, count: 0, id: NaN },
    { time: 1724803200000, count: -3, id: 1 },
    { time: -1724803200000, count: -3, id: 1 },
    { time: -1724803200000, count: 3, id: 1 },
];

test.each(testCases)('should calculate the character id of the day within the given character count', ({ time, count, id }) => {
    Date.now = vi.fn().mockReturnValue(time);
    expect(getCharacterIdOfTheDay(count)).toBe(id);
});
