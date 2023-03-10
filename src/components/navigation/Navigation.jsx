import React, { useState } from 'react';
import Button from '../button/Button';
import FlexContainer from '../flexContainer/FlexContainer';
import Menu from '../menu/Menu';
import './Navigation.scoped.css';

/**
 * @param {{
 * addNewCallback: () => void,
 * removeAllCallback: () => void,
 * resetFiltersCallback: () => void}} props
 * @returns {JSX.Element} Navigation component
 */
function Navigation({ addNewCallback, removeAllCallback, resetFiltersCallback }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__content">
          <Button text="Options" callback={() => setIsShown(!isShown)} />
          <Menu isShown={isShown}>
            <Button text="Close" type="danger" callback={() => setIsShown(!isShown)} />
            <FlexContainer flexDirection="column" alignItems="center" justifyContent="center" width="100%" height="100%">
              <Button text="Add new" type="menu-item" callback={addNewCallback} />
              <Button text="Remove all" type="menu-item" callback={removeAllCallback} />
              <Button text="Reset filters" type="menu-item" callback={resetFiltersCallback} />
            </FlexContainer>
          </Menu>
        </div>
      </nav>
      <div className="separator" />
    </>
  );
}

export default Navigation;
