import React, { useState } from 'react';
import Button from '../button/Button';
import FlexContainer from '../flexContainer/FlexContainer';
import Menu from '../menu/Menu';
import './Navigation.scoped.css';
import AddAlbumForm from '../addAlbumForm/addAlbumForm';
import Filter from '../filter/Filter';

/**
 * @param {{
 * addNewCallback: (album: Album) => void,
 * addSeedData: () => void,
 * removeAllCallback: () => void,
 * applyFilters: (filters: (album: Album) => boolean)}} props
 * @returns {JSX.Element} Navigation component
 */
function Navigation({
  addNewCallback, addSeedData, removeAllCallback, applyFilters,
}) {
  const [menuShown, setMenuShown] = useState(false);
  const [addAlbumShown, setAddAlbumShown] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__content">
          <FlexContainer>
            <Button text="Main menu" callback={() => setMenuShown(true)} />
            <Filter onChange={applyFilters} />
          </FlexContainer>
          <Menu isShown={menuShown}>
            <Button text="Close" type="danger" callback={() => setMenuShown(false)} />
            <FlexContainer flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%">
              <Button text="Add new" type="menu-item" callback={() => { setAddAlbumShown(true); }} />
              <Button text="Add seed data" type="menu-item" callback={addSeedData} />
              <Button text="Remove all" type="menu-item" callback={removeAllCallback} />
              <Menu isShown={addAlbumShown}>
                <Button text="Close" type="danger" callback={() => setAddAlbumShown(false)} />
                <AddAlbumForm addAlbumCallback={addNewCallback} />
              </Menu>
            </FlexContainer>
          </Menu>
        </div>
      </nav>
      <div className="separator" />
    </>
  );
}

export default Navigation;
