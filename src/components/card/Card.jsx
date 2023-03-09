import React from 'react';
import './Card.scoped.css';
import { ReactComponent as AlbumCoverPlaceholder } from '../../assets/album-cover-placeholder.svg';
import FlexContainer from '../flexContainer/FlexContainer';
import Chip from '../chip/Chip';
import Button from '../button/Button';

/**
 * @param {{album: Album}} props
 * @returns {JSX.Element} Card component
 */
function Card({ album }) {
  return (
    <div className="card">
      <div className="album-cover-wrapper">
        <h2 className="year-of-release">{album.yearOfRelease}</h2>
        {/* <AlbumCoverPlaceholder /> */}
      </div>
      <div className="card__content">
        <h2 className="author">{album.author}</h2>
        <h1 className="album-name">{album.name}</h1>
        <FlexContainer gap="4px" flexWrap="wrap">
          {album.genres.map((genre) => <Chip text={genre} key={`${album.uuid}__${genre}`} />)}
        </FlexContainer>
      </div>
      <div className="buttons">
        <Button text="Remove" type="danger" callback={() => {}} />
      </div>
    </div>
  );
}

export default Card;
