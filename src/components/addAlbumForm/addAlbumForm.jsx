import React from 'react';
import './addAlbumForm.scoped.css';
import Select from 'react-select';
import { DateTime } from 'luxon';
import data from '../../data/genres.json';
import FlexContainer from '../flexContainer/FlexContainer';
import Button from '../button/Button';

function AddAlbumForm() {
  return (
    <form action="addNewAlbum">
      <div className="form__content">
        <FlexContainer flexDirection="column" gap="8px">
          <label htmlFor="name">
            <input type="text" id="name" name="name" placeholder="Album" />
          </label>
          <label htmlFor="author">
            <input type="text" id="author" name="author" placeholder="Author" />
          </label>
          <Select
            placeholder="Select genres"
            options={data.genres.map((genre) => ({ value: genre, label: genre }))}
            isMulti="true"
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                border: !isFocused ? 'none' : '2px solid var(--accent)',
                borderRadius: 0,
                outline: 'none',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                borderRadius: 'none',
              }),
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                ':hover': {
                  color: '#ff212d',
                },
              }),
            }}
          />
          <label htmlFor="release-year">
            <input type="number" id="release-year" name="release-year" placeholder="Year" defaultValue={DateTime.utc().year} />
          </label>
          <div className="form__submit"><Button text="Add album" /></div>
        </FlexContainer>
      </div>
    </form>
  );
}

export default AddAlbumForm;
