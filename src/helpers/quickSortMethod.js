export const sortingMethod = origArray => {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    let left = [];
    let right = [];
    const pivot = origArray.pop();
    const length = origArray.length;

    for (var i = 0; i < length; i++) {
      console.log('left >', left, ' right >', right);
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    const finalValue = [].concat(
      sortingMethod(left),
      pivot,
      sortingMethod(right)
    );
    console.log(finalValue);
    return finalValue;
  }
};
