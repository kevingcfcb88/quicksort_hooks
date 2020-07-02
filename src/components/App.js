import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextInput from './TextInput';
import { sortingMethod } from '../helpers/quickSortMethod';

const App = () => {
  const [quicksort, setQuiksort] = useState([]);
  const [toOrder, setToOrder] = useState([]);

  const runSort = () => {
    sortingMethod([...toOrder]);
  };

  const helperRender = () => {
    return quicksort.map((v, i) => <label key={i}>{v}</label>);
  };

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item container xs={12} alignItems="center" justify="center">
          <TextInput
            label="Enter Sequence"
            handleOnChange={e => setToOrder(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => runSort()}
            style={{ margin: '10px' }}
          >
            Sort
          </Button>
        </Grid>
        <Grid item container xs={12} alignItems="center" justify="center">
          <h1>{quicksort !== null ? helperRender() : null}</h1>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
