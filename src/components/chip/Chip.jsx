import React from 'react';
import './Chip.scoped.css';

/**
 * @param {{
 * text: string,
 * type: undefined | 'active',
 * backgroundColor: string}} props
 * @returns {JSX.Element} Chip component
 */
function Chip({
  text, type, backgroundColor,
}) {
  return (
    <div className={type} style={{ backgroundColor }}>
      {text}
    </div>
  );
}

export default Chip;
