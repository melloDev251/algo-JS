function bubbleSort(array) {
  // return array.sort((a, b) => {
  //   return a - b;
  // });

  // à chaque fin de parcour, elle va relancer une nouvel boucle jusqu'elle arrive à la longueur du tableau
  for (let i = 0; i < array.length - 1; i++) {
    // la boucle j va parcourir le tableau
    for (let j = 0; j < array.length - 1 -i; j++) {
      // la valeur de array[j] prend la valeur de array[j+1]
      if (array[j] > array[j + 1]) {
        console.log("ancienne valeur :" + array[j]);
        // on passe la valeur de array[j+1] à l'élément de ce mini tableau de j
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log("nouvelle valeur :" + array[j]);

      }
    }
  }

  return array;
}

console.log(
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 123, 44, 3, 55, 46, 234, 92])
);
