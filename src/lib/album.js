import { v4 } from 'uuid';
import { DateTime } from 'luxon';

/**
 * Defines an album.
 */
export class Album {
  /**
   * Creates a new Album object.
   * @param {{
   * uuid: string | undefined,
   * name: string,
   * author: string,
   * genres: Array<string>,
   * yearOfRelease: number,
   * addedAt: string | undefined,
   * cover: string | undefined
   * }} data album data
   */
  constructor(data) {
    this.uuid = data.uuid ?? v4();
    this.name = data.name;
    this.author = data.author;
    this.genres = data.genres;
    this.yearOfRelease = data.yearOfRelease;
    this.addedAt = data.addedAt ?? DateTime.utc().toISO();
    this.cover = data.cover;
  }
}

/**
 * Filters albums by an arbitrary number of filter objects.
 * @param {Array<Album>} albums album collection to filter
 * @param {Array<(album: Album) => boolean>} filters collection of filter predicates
 * @returns {Array<Album>} filtered albums
 */
export const filterAlbums = (albums, filters) => (!filters ? albums : albums.filter((album) => {
  const albumResult = filters.reduce((accumulator, filter) => {
    const predicatesResult = filter(album) && accumulator;
    return predicatesResult;
  }, true);
  return albumResult;
}));

/**
 * Returns a filter ready to be used within the `filterAlbums` function.
 * @param {string} name filters by the provided name
 * @returns {(album: Album) => boolean} filter
 */
export const getFilterByName = (name) => (album) => (name !== '' ? album.name.toLowerCase().includes(name.toLowerCase()) : true);

/**
 * Returns a filter ready to be used within the `filterAlbums` function.
 * @param {string} searchGenre filters by the provided genre
 * @returns {(album: Album) => boolean} filter
 */
export const getFilterByGenre = (searchGenre) => (album) => {
  const result = album.genres.some((albumGenre) => albumGenre
    .toLowerCase()
    .includes(searchGenre.toLowerCase()));
  return result;
};

/**
 * Sorts albums by release year and name.
 * @param {Array<Album>} albums collection of albums
 * @returns {Array<Album>} sorted collection of albums
 */
export const albumSort = (albums) => [...albums]
  .sort((a1, a2) => a1.name.localeCompare(a2.name))
  .sort((a1, a2) => a1.yearOfRelease - a2.yearOfRelease);

/**
 * Removes an album by uuid from the specified collection.
 * @param {string} uuid uuid of album to remove
 * @param {Array<Album>} albums collection of albums to remove from
 * @returns {Array<Album>}
 */
export const removeAlbum = (uuid, albums) => albums.filter((a) => a.uuid !== uuid);

export const setLocalAlbums = (albums) => {
  localStorage.removeItem('albums');
  localStorage.setItem('albums', JSON.stringify(albums));
};

export const getLocalAlbums = () => {
  const data = JSON.parse(localStorage.getItem('albums'));

  if (!data) { return []; }
  return data;
};

/**
 * Validates album data.
 * @param {Album} album album to validate
 * @returns {boolean}
 */
export const validateAlbumData = (album) => {
  if (album.name.trim() === '') { return false; }
  if (album.author.trim() === '') { return false; }
  if (album.genres.length < 1) return false;
  if (album.yearOfRelease > DateTime.utc().year) { return false; }
  return true;
};
