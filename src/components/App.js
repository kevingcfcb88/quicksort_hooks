import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextInput from './TextInput';
import quickSortHelper from '../helpers/quicksort';

const App = () => {
  const [quicksort, setQuicksort] = useState([]);
  const [toOrder] = useState([8, 9, 0, 3, 7, 5, 1, 4, 6, 2]);

  useEffect(() => {
    setQuicksort(
      quickSortHelper(toOrder, toOrder[0], toOrder[toOrder.length - 1])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = e => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item container xs={12} alignItems="center" justify="center">
          <TextInput label="Enter Sequence" handleOnChange={handleOnChange} />
        </Grid>
        <Grid item container xs={12} alignItems="center" justify="center">
          {quicksort.map((v, i) => (
            <ul key={i}>{v}</ul>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
