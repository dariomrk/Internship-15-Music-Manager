import React, { useEffect, useState } from 'react';
import CardContainer from './components/cardContainer/CardContainer';
import { removeAlbum, setLocalAlbums, getLocalAlbums } from './lib/album';
import encode from './lib/encodeBase64';
// import { albums as seed } from './data/seed';
import Navigation from './components/navigation/Navigation';

function App() {
  // const [albums, setAlbums] = useState(seed);
  const [albums, setAlbums] = useState(getLocalAlbums());

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
      <Navigation />
      <CardContainer
        albums={albums}
        addCoverCallback={addCoverHandler}
        removeAlbumCallback={removeAlbumHandler}
      />
    </>
  );
}

export default App;
