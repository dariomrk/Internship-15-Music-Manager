import React from 'react';
import './Card.scoped.css';
import { DateTime } from 'luxon';
import FlexContainer from '../flexContainer/FlexContainer';
import Chip from '../chip/Chip';
import Button from '../button/Button';
import FileInput from '../fileInput/FileInput';

/**
 * @param {{
 * album: Album,
 * addCoverCallback: (files: Array<File>, album: Album) => void,
 * removeCoverCallback: (album: Album) => void,
 * removeCallback: (album: Album) => void}} props
 * @returns {JSX.Element} Card component
 */
function Card({
  album,
  addCoverCallback,
  removeCoverCallback,
  removeCallback,
}) {
  const isAddedToday = DateTime.fromISO(album.addedAt).hasSame(DateTime.utc(), 'day');

  return (
    <div className="card" style={{ border: (isAddedToday ? '8px solid var(--accent)' : '') }}>
      <div className="album-cover-wrapper" style={{ backgroundImage: (!album.cover ? '' : `url(${album.cover})`) }}>
        <h2 className="year-of-release">{album.yearOfRelease}</h2>
      </div>
      <div className="card__content">
        <h2 className="author">{album.author}</h2>
        <h1 className="album-name">{album.name}</h1>
        <FlexContainer gap="4px" flexWrap="wrap">
          {album.genres.map((genre) => <Chip text={genre} key={`${album.uuid}__${genre}`} />)}
        </FlexContainer>
      </div>
      <div className="buttons">
        <FlexContainer flexDirection="column" alignItems="end" gap="4px">
          {!album.cover
            ? (
              <FileInput
                text="Add cover"
                callback={(files) => { addCoverCallback(files, album); }}
              />
            )
            : <Button text="Remove cover" type="danger" callback={() => removeCoverCallback(album)} />}
          <Button text="Remove" type="danger" callback={() => { removeCallback(album); }} />
        </FlexContainer>
      </div>
    </div>
  );
}

export default Card;
