import React from 'react';
import { albumSort, filterAlbums } from '../../lib/album';
import Card from '../card/Card';
import FlexContainer from '../flexContainer/FlexContainer';
import './CardContainer.scoped.css';

/**
 * @param {{albums: Array<Album>, filters: Array<Function>}} props
 * @returns {JSX.Element} Card container component
 */
function CardContainer({ albums, filters }) {
  const processedAlbums = filterAlbums(albumSort(albums), filters);

  return (
    <div className="container">
      <FlexContainer flexDirection="column" gap="12px">
        {processedAlbums.map((album) => <Card album={album} key={album.uuid} />)}
      </FlexContainer>
    </div>
  );
}

export default CardContainer;
