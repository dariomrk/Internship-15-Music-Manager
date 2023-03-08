import React from 'react';
import { Album } from '../../lib/album';
import './Card.scoped.css';
import { ReactComponent as AlbumCoverPlaceholder } from '../../assets/album-cover-placeholder.svg';

/**
 * @param {{album: Album}} props
 * @returns {JSX.Element} Card component
 */
function Card({ album }) {
  return (
    <div className="card">
      <AlbumCoverPlaceholder />
      <div className="card__content">
        <h2 className="year-of-release">{album.yearOfRelease}</h2>
        <h2 className="author">{album.author}</h2>
        <h1 className="album-name">{album.name}</h1>
      </div>
    </div>
  );
}

export default Card;
