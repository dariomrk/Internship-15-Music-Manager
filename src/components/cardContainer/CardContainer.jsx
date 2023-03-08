import React from 'react';
import { albumSort, filterAlbums } from '../../lib/album';
import Card from '../card/Card';
import FlexContainer from '../flexContainer/FlexContainer';

/**
 * @param {{albums: Array<Album>, filters: Array<Function>}} props
 * @returns {JSX.Element} Card container component
 */
function CardContainer({ albums, filters }) {
  const processedAlbums = filterAlbums(albumSort(albums), filters);

  return (
    <FlexContainer gap="12px">
      {processedAlbums.map((album) => <Card album={album} />)}
    </FlexContainer>
  );
}

export default CardContainer;
