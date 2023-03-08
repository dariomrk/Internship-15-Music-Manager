import { test, expect } from 'vitest';
import {
  Album, filterAlbums, getFilterByGenre, getFilterByName,
} from './album';

const albums = [
  new Album({
    name: 'Rage Against the Machine',
    author: 'Rage Against the Machine',
    genre: 'Rap metal',
    yearOfRelease: 1992,
  }),
  new Album({
    name: 'Californication',
    author: 'Red Hot Chili Peppers',
    genre: 'Alternative rock',
    yearOfRelease: 1998,
  }),
  new Album({
    name: 'Ride the Lightning',
    author: 'Metallica',
    genre: 'Thrash metal',
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

test('filtering by name and genre', () => {
  const result = filterAlbums(albums, [getFilterByName('light')], [getFilterByGenre('metal')]);
  expect(result)
    .toContain(albums[2]);
  expect(result)
    .not
    .toContain(albums[0], albums[1]);
});
