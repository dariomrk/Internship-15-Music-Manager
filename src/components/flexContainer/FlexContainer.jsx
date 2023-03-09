import React from 'react';

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
      display: 'flex',
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
