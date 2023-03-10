import React, { useEffect, useState } from 'react';
import './Filter.scoped.css';
import SelectGenres from '../selectGenres/SelectGenres';
import data from '../../data/genres.json';
import FlexContainer from '../flexContainer/FlexContainer';
import { getFilterByGenre, getFilterByName } from '../../lib/album';

/**
 * @param {{onChange: (filters: Array<(album: Album)> => boolean) => void}} props
 * @returns {JSX.Element} Filter component
 */
function Filter({ onChange }) {
  const [filterName, setFilterName] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  useEffect(() => {
    onChange([
      getFilterByName(filterName),
      getFilterByGenre(filterGenre),
    ]);
  }, [filterName, filterGenre]);

  return (
    <form action="filter-albums">
      <FlexContainer flexDirection="row" gap="8px" alignItems="center" justifyContent="end">
        <label htmlFor="filter-name">
          <input type="text" name="filter-name" id="filter-name" placeholder="Filter by name" onChange={(e) => setFilterName(e.target.value)} />
        </label>
        <SelectGenres id="filter-genres" genres={data.genres} onChange={(item) => setFilterGenre(item.value ?? '')} />
      </FlexContainer>
    </form>
  );
}

export default Filter;
