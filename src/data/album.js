import { v4 } from 'uuid';
import { DateTime } from 'luxon';

/**
 * Defines an album.
 */
class Album {
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

export default Album;
