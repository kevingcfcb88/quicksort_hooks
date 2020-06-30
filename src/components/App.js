import React, { useEffect, useState } from 'react';

const quickSort = origArray => {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    let left = [];
    let right = [];
    const pivot = origArray.pop();
    const length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
  }
};

const App = () => {
  const [quicksort, setQuicksort] = useState([]);
  const [toOrder] = useState([8, 9, 0, 3, 7, 5, 1, 4, 6, 2]);

  useEffect(() => {
    setQuicksort(quickSort(toOrder, toOrder[0], toOrder[toOrder.length - 1]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {quicksort.map((v, i) => (
        <ul key={i}>{v}</ul>
      ))}
    </div>
  );
};

export default App;
