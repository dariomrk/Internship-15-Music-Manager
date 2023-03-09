import { test, expect } from 'vitest';
import {
  albumSort,
  filterAlbums,
  getFilterByGenre,
  getFilterByName,
} from './album';
import { albums } from './sample';

test('filtering by name', () => {
  const result = filterAlbums(albums, [getFilterByName('the')]);
  expect(result)
    .toContain(albums[0], albums[2]);
  expect(result)
    .not
    .toContain(albums[1], albums[3]);
});

test('filtering by genre', () => {
  const result = filterAlbums(albums, [getFilterByGenre('metal')]);
  expect(result)
    .toContain(albums[0], albums[2]);
  expect(result)
    .not
    .toContain(albums[1], albums[3]);
});

test('filter by name and genre', () => {
  const result = filterAlbums(albums, [getFilterByName('light'), getFilterByGenre('Thrash')]);
  expect(result)
    .toContain(albums[2]);
  expect(result)
    .not
    .toContain(albums[0], albums[1], albums[3]);
});

test('album sort', () => {
  const result = albumSort(albums);
  expect(result[0])
    .toEqual(albums[2]);
  expect(result[1])
    .toEqual(albums[3]);
  expect(result[2])
    .toEqual(albums[0]);
});
