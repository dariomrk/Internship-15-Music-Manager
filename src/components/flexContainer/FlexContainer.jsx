import React from 'react';
import './FlexContainer.scoped.css';

/**
 * @param {{children: Array<JSX.Element>,
 * flexDirection: undefined | string,
 * justifyContent: undefined | string,
 * alignItems: undefined | string,
 * flexWrap: undefined | string,
 * gap: undefined | string}} props
 * @returns {JSX.Element}
 */
function FlexContainer({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
}) {
  return (
    <div style={{
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
    }}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
