function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    // fonction ternaire
    array[i] < pivot ? leftArray.push(array[i]) : rightArray.push(array[i]);
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
      console.log(leftArray + " / " + rightArray);
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else {
    return [pivot, ...quickSort(rightArray)];
  }
}

console.log(
  quickSort([1, 4, 2, 8, 345, 135, 43, 32, 5643, 123, 44, 3, 55, 46, 234, 92])
);
