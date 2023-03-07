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
   * genre: string,
   * yearOfRelease: number,
   * addedAt: string | undefined
   * }} data album data
   */
  constructor(data) {
    this.uuid = data.uuid ?? v4();
    this.name = data.name;
    this.author = data.author;
    this.genre = data.genre;
    this.yearOfRelease = data.yearOfRelease;
    this.addedAt = data.addedAt ?? DateTime.now().toISO();
  }
}

/**
 * Filters albums by an arbitrary number of filter objects.
 * @param {Array<Album>} albums album collection to filter
 * @param {Array<predicate: (album: Album) => boolean>} filters collection of filter predicates
 * @returns {Array<Album>} filtered albums
 */
export const filterAlbums = (albums, filters) => albums.filter((album) => {
  const albumResult = filters.reduce((accumulator, filter) => {
    const predicatesResult = filter(album) && accumulator;
    return predicatesResult;
  }, true);
  return albumResult;
});

/**
 * Returns a filter ready to be used within the `filterAlbums` function.
 * @param {string} name filters by the provided name
 * @returns {(album: Album) => boolean} filter
 */
export const getFilterByName = (name) => (album) => album.name.includes(name);

/**
 * Returns a filter ready to be used within the `filterAlbums` function.
 * @param {string} genre filters by the provided genre
 * @returns {(album: Album) => boolean} filter
 */
export const getFilterByGenre = (genre) => (album) => album.genre.includes(genre);
