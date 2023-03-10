import React from 'react';
import { albumSort, filterAlbums } from '../../lib/album';
import Card from '../card/Card';
import FlexContainer from '../flexContainer/FlexContainer';
import './CardContainer.scoped.css';

/**
 * @param {{
 * albums: Array<Album>,
 * filters: Array<Function>,
 * addCoverCallback: (files: Array<File>, album: Album) => void,
 * removeCoverCallback: (album: Album) => void,
 * removeAlbumCallback: (album: Album) => void}} props
 * @returns {JSX.Element} Card container component
 */
function CardContainer({
  albums,
  filters,
  addCoverCallback,
  removeCoverCallback,
  removeAlbumCallback,
}) {
  const processedAlbums = filterAlbums(albumSort(albums), filters);
  return (
    <div className="container">
      <FlexContainer flexDirection="column" gap="12px">
        {processedAlbums.map((album) => (
          <Card
            album={album}
            key={album.uuid}
            addCoverCallback={addCoverCallback}
            removeCoverCallback={removeCoverCallback}
            removeCallback={removeAlbumCallback}
          />
        ))}
      </FlexContainer>
    </div>
  );
}

export default CardContainer;
