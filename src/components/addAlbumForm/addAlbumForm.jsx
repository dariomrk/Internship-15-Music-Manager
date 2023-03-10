import React, { useRef, useState } from 'react';
import './addAlbumForm.scoped.css';
import { DateTime } from 'luxon';
import data from '../../data/genres.json';
import FlexContainer from '../flexContainer/FlexContainer';
import Button from '../button/Button';
import FileInput from '../fileInput/FileInput';
import encode from '../../lib/encodeBase64';
import { Album, validateAlbumData } from '../../lib/album';
import SelectGenres from '../selectGenres/SelectGenres';

/**
 * @param {{addAlbumCallback: (album: Album) => void}} props
 * @returns {JSX.Element} AddAlbumForm
 */
function AddAlbumForm({ addAlbumCallback }) {
  const selectedGenres = useRef();
  const [cover, setCover] = useState(undefined);

  return (
    <form
      action="addNewAlbum"
      id="new-album"
    >
      <div className="form__content">
        <FlexContainer flexDirection="column" gap="8px">
          <label htmlFor="name">
            <input type="text" id="name" name="name" placeholder="Album" />
          </label>
          <label htmlFor="author">
            <input type="text" id="author" name="author" placeholder="Author" />
          </label>
          <SelectGenres selectedGenres={selectedGenres} genres={data.genres} />
          <label htmlFor="release-year">
            <input type="number" id="release-year" name="release-year" placeholder="Year" defaultValue={DateTime.utc().year} />
          </label>
          <p>{!cover ? 'No cover image' : 'Cover image added'}</p>
          <div className="form__buttons">
            <FlexContainer gap="8px">
              {!cover
                ? (
                  <FileInput
                    text="Add cover"
                    callback={async (files) => {
                      if (files.length < 1) { return; }
                      setCover(await encode(files[0]));
                    }}
                  />
                )
                : <Button text="Remove cover" type="danger" callback={() => setCover(undefined)} />}
              <Button
                text="Add album"
                type="success"
                callback={() => {
                  const albumData = {
                    name: document.getElementById('name').value,
                    author: document.getElementById('author').value,
                    genres: selectedGenres.current.getValue().map((item) => item.value),
                    yearOfRelease: document.getElementById('release-year').value,
                    cover,
                  };

                  if (!validateAlbumData(albumData)) {
                    return;
                  }

                  addAlbumCallback(new Album(albumData));
                }}
              />
            </FlexContainer>
          </div>
        </FlexContainer>
      </div>
    </form>
  );
}

export default AddAlbumForm;
