import { test, expect } from 'vitest';
import {
  Album, filterAlbums, getFilterByGenre, getFilterByName,
} from './album';

const albums = [
  new Album({
    name: 'Rage Against the Machine',
    author: 'Rage Against the Machine',
    genres: ['Rap metal', 'Alternative metal', 'Funk metal'],
    yearOfRelease: 1992,
  }),
  new Album({
    name: 'Californication',
    author: 'Red Hot Chili Peppers',
    genres: ['Alternative rock', 'Funk rock'],
    yearOfRelease: 1998,
  }),
  new Album({
    name: 'Ride the Lightning',
    author: 'Metallica',
    genres: ['Thrash metal'],
    yearOfRelease: 1984,
  }),
];

test('filtering by name', () => {
  const result = filterAlbums(albums, [getFilterByName('the')]);
  expect(result)
    .toContain(albums[0], albums[2]);
  expect(result)
    .not
    .toContain(albums[1]);
});

test('filtering by genre', () => {
  const result = filterAlbums(albums, [getFilterByGenre('metal')]);
  expect(result)
    .toContain(albums[0], albums[2]);
  expect(result)
    .not
    .toContain(albums[1]);
});

test('filter by name and genre', () => {
  const result = filterAlbums(albums, [getFilterByName('light'), getFilterByGenre('Thrash')]);
  expect(result)
    .toContain(albums[2]);
  expect(result)
    .not
    .toContain(albums[0], albums[1]);
});
