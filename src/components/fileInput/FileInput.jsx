/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { v4 } from 'uuid';
import './FileInput.scoped.css';

function FileInput({ text, accept, callback }) {
  const uuid = v4();
  return (
    <label
      className="button"
      htmlFor={`file-input__${uuid}`}
      onClick={(e) => {
        e.stopPropagation();
        document.getElementById(uuid).click();
      }}
    >
      {text}
      <input
        type="file"
        name={`file-input__${uuid}`}
        id={uuid}
        accept={accept}
        onChange={() => {
          const { files } = document.getElementById(uuid);
          callback(files);
        }}
      />
    </label>
  );
}

export default FileInput;
