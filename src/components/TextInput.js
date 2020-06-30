import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

const TextInput = ({ label, handleOnChange }) => {
  const [textValue, setTextValue] = useState('');

  const onChange = e => {
    setTextValue(e.target.value);
    handleOnChange(e);
  };

  return (
    <TextField
      id="inputArray"
      label={label}
      variant="outlined"
      value={textValue}
      onChange={e => onChange(e)}
    />
  );
};

export default TextInput;
