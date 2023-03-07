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
 * @param {Array<{
 * predicate: (album: Album, data: any) => boolean,
 * args: any
 * }>} filterObjects collection of filter predicates and accompanying arguments
 */
export const filterAlbums = (albums, filterObjects) => albums.filter((album) => {
  const albumResult = filterObjects.reduce((accumulator, filterObject) => {
    const predicatesResult = filterObject.predicate(album, filterObject.args) && accumulator;
    return predicatesResult;
  }, true);
  return albumResult;
});
