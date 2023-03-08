import React from 'react';
import './Card.scoped.css';
import { ReactComponent as AlbumCoverPlaceholder } from '../../assets/album-cover-placeholder.svg';
import FlexContainer from '../flexContainer/FlexContainer';
import Chip from '../chip/Chip';

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
        <FlexContainer>
          {album.genres.map((genre) => <Chip text={genre} />)}
        </FlexContainer>
      </div>
    </div>
  );
}

export default Card;
