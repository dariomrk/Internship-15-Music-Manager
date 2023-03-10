import React from 'react';
import Select from 'react-select';

function SelectGenres({ selectedGenres, genres }) {
  return (
    <Select
      ref={selectedGenres}
      id="genres"
      placeholder="Select genres"
      options={genres.map((genre) => ({ value: genre, label: genre }))}
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
  );
}

export default SelectGenres;
