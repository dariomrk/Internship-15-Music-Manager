import React from 'react';

/**
 * @param {{children: Array<JSX.Element>,
 * flexDirection: undefined | string,
 * justifyContent: undefined | string,
 * alignItems: undefined | string,
 * flexWrap: undefined | string,
 * gap: undefined | string,
 * width: undefined | string,
 * height: undefined | string}} props
 * @returns {JSX.Element}
 */
function FlexContainer({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  width,
  height,
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
      width,
      height,
    }}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
