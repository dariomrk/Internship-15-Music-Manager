import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CardContainer from './components/cardContainer/CardContainer';
import {
  removeAlbum,
  setLocalAlbums,
  filterAlbums,
  getLocalAlbums,
} from './lib/album';
import encode from './lib/encodeBase64';
import Navigation from './components/navigation/Navigation';
// import { albums as seedAlbums } from './data/seed';

function App() {
  const [albums, setAlbums] = useState(getLocalAlbums());
  // const [albums, setAlbums] = useState(seedAlbums);
  const [filters, setFilters] = useState([]);

  // #region event handlers
  const addCoverHandler = async (files, album) => {
    if (files.length < 1) { return; }

    const albumWithCover = {
      ...album,
      cover: await encode(files[0]),
    };
    toast.info('Added album cover', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    setAlbums((currentAlbums) => [...removeAlbum(album.uuid, currentAlbums), albumWithCover]);
  };

  const removeCoverHandler = (album) => {
    const albumWithoutCover = { ...album, cover: undefined };
    toast.error('Removed album cover', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setAlbums((currentAlbums) => [...removeAlbum(album.uuid, currentAlbums), albumWithoutCover]);
  };

  const removeAlbumHandler = (album) => {
    toast.error('Removed album', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setAlbums((currentAlbums) => removeAlbum(album.uuid, currentAlbums));
  };

  const removeAllHandler = () => {
    toast.error('Removed all albums', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setAlbums([]);
  };
  // #endregion

  useEffect(() => {
    setLocalAlbums(albums);
  }, [albums]);

  return (
    <>
      <Navigation
        addNewCallback={(album) => setAlbums((prev) => [...prev, album])}
        removeAllCallback={removeAllHandler}
        applyFilters={(newFilters) => {
          setFilters(newFilters);
        }}
      />
      <CardContainer
        albums={filterAlbums(albums, filters)}
        addCoverCallback={addCoverHandler}
        removeCoverCallback={removeCoverHandler}
        removeAlbumCallback={removeAlbumHandler}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{ borderRadius: 0 }}
      />
    </>
  );
}

export default App;
