import { DateTime, Duration } from 'luxon';
import { Album } from '../lib/album';

// eslint-disable-next-line import/prefer-default-export
export const albums = [
  new Album({
    name: 'Rage Against the Machine',
    author: 'Rage Against the Machine',
    genres: ['Rap metal', 'Alternative metal', 'Funk metal'],
    yearOfRelease: 1992,
    addedAt: DateTime.utc().minus(Duration.fromISO('PT25H')),
  }),
  new Album({
    name: 'Californication',
    author: 'Red Hot Chili Peppers',
    genres: ['Alternative rock', 'Funk rock'],
    yearOfRelease: 1998,
    addedAt: DateTime.utc().minus(Duration.fromISO('PT25H')),
  }),
  new Album({
    name: 'Ride the Lightning',
    author: 'Metallica',
    genres: ['Thrash metal'],
    yearOfRelease: 1984,
    addedAt: DateTime.utc().minus(Duration.fromISO('PT25H')),
  }),
  new Album({
    name: 'Dirt',
    author: 'Alice In Chains',
    genres: ['Grunge', 'Alternative rock'],
    yearOfRelease: 1992,
    addedAt: DateTime.utc().minus(Duration.fromISO('PT25H')),
  }),
];
