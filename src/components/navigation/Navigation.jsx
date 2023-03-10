import React, { useState } from 'react';
import Button from '../button/Button';
import FlexContainer from '../flexContainer/FlexContainer';
import Menu from '../menu/Menu';
import './Navigation.scoped.css';
import AddAlbumForm from '../addAlbumForm/addAlbumForm';

/**
 * @param {{
 * addNewCallback: (album: Album) => void,
 * removeAllCallback: () => void,
 * resetFiltersCallback: () => void}} props
 * @returns {JSX.Element} Navigation component
 */
function Navigation({ addNewCallback, removeAllCallback, resetFiltersCallback }) {
  const [menuShown, setMenuShown] = useState(false);
  const [addAlbumShown, setAddAlbumShown] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__content">
          <Button text="Options" callback={() => setMenuShown(true)} />
          <Menu isShown={menuShown}>
            <Button text="Close" type="danger" callback={() => setMenuShown(false)} />
            <FlexContainer flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%">
              <Button text="Add new" type="menu-item" callback={() => { setAddAlbumShown(true); }} />
              <Button text="Remove all" type="menu-item" callback={removeAllCallback} />
              <Button text="Reset filters" type="menu-item" callback={resetFiltersCallback} />
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
