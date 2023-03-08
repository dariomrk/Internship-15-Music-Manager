import React from 'react';
import './Button.scoped.css';

/**
 * @param {{
 * text: string,
 * type: undefined | 'danger' | 'success',
 * callback: Function}} props
 * @returns {JSX.Element} Button component
 */
function Button({ text, type, callback }) {
  return (
    <button className={`${type}`} type="button" onClick={(e) => callback(e)}>
      {text}
    </button>
  );
}

export default Button;
