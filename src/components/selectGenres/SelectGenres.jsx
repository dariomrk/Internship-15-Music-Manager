import React from 'react';
import Select from 'react-select';

function SelectGenres({
  id,
  selectedGenres,
  genres,
  onChange,
  isMulti,
  isClearable,
}) {
  return (
    <Select
      onChange={onChange}
      ref={selectedGenres}
      id={id}
      placeholder={isMulti ? 'Select genres' : 'Select a genre'}
      options={genres.map((genre) => ({ value: genre, label: genre }))}
      isMulti={isMulti}
      isClearable={isClearable}
      styles={{
        control: (baseStyles, { isFocused }) => ({
          ...baseStyles,
          borderRadius: 0,
          outline: 'none',
          maxWidth: '512px',
          width: '512px',
          boxSizing: 'border-box',
          border: (!isFocused ? 'none' : '1px solid var(--accent)'),
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
        multiValue: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '0',
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '0',
        }),
      }}
    />
  );
}

export default SelectGenres;
