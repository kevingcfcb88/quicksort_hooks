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

export default quickSort;
