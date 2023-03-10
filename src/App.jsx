import React, { useEffect, useState } from 'react';
import CardContainer from './components/cardContainer/CardContainer';
import {
  removeAlbum,
  setLocalAlbums,
  filterAlbums,
} from './lib/album';
import encode from './lib/encodeBase64';
import Navigation from './components/navigation/Navigation';
import { albums as seedAlbums } from './data/seed';

function App() {
  // const [albums, setAlbums] = useState(getLocalAlbums());
  const [albums, setAlbums] = useState(seedAlbums);
  const [filters, setFilters] = useState([]);

  // #region event handlers
  const addCoverHandler = async (files, album) => {
    if (files.length < 1) { return; }

    const albumWithCover = {
      ...album,
      cover: await encode(files[0]),
    };

    setAlbums((currentAlbums) => [...removeAlbum(album.uuid, currentAlbums), albumWithCover]);
  };

  const removeAlbumHandler = (album) => {
    setAlbums((currentAlbums) => removeAlbum(album.uuid, currentAlbums));
  };
  // #endregion

  useEffect(() => {
    setLocalAlbums(albums);
  }, [albums]);

  return (
    <>
      <Navigation
        addNewCallback={(album) => setAlbums((prev) => [...prev, album])}
        removeAllCallback={() => { setAlbums([]); }}
        applyFilters={(newFilters) => {
          setFilters(newFilters);
        }}
      />
      <CardContainer
        albums={filterAlbums(albums, filters)}
        addCoverCallback={addCoverHandler}
        removeAlbumCallback={removeAlbumHandler}
      />
    </>
  );
}

export default App;
