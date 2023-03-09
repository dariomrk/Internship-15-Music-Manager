import React, { useEffect, useState } from 'react';
import CardContainer from './components/cardContainer/CardContainer';
import { removeAlbum, setLocalAlbums, getLocalAlbums } from './lib/album';
import encode from './lib/encodeBase64';
import { albums as seed } from './lib/sampleAlbums';

function App() {
  const [albums, setAlbums] = useState(getLocalAlbums());

  // #region event handlers
  const addCoverHandler = async (e, files, album) => {
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
    <CardContainer
      albums={albums}
      addCoverCallback={addCoverHandler}
      removeAlbumCallback={removeAlbumHandler}
    />
  );
}

export default App;
