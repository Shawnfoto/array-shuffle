function shuffle(array) {
  let currentIndex = array.length-1;
  let temporaryValue = 0;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    currentIndex--;
  }

  return array;
}
