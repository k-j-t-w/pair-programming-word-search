// this function swaps the rows and colums of a matrix, this is helpful for searching vertically in our array
const transpose = function(array) {
  const transposed = [];
  
  for (let arr of array) {
    for (let i = 0; i < arr.length; i++) {
      transposed[i] = transposed[i] || [];
      transposed[i].push(arr[i]);
    }
  }
  return transposed;
};
  
// this function outputs an array of the diagonals of the matrix from top right to bottom left
const makeDiagonalArr = function(array) {
  const diaArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let n = 0; n < array[i].length; n++) {
      diaArr[i + n] = diaArr[i + n] || [];
      diaArr[i + n].push(array[i][n]);
    }
  }
    
    
  return diaArr;
};
  
const wordSearch = function(array, wordToFind) {
  const transposed = transpose(array);
  const diagArr = makeDiagonalArr(array);
  
  // creates a reversed array for the diagonal search
  const revArr = [];
  for (let i = 0; i < array.length; i++) {
    revArr.push(array[i].slice().reverse()); //slice is needed to not alter initial array
  }
  const revDiagArr = makeDiagonalArr(revArr);
    
  // forward and backwards search
  for (const arr of array) {
    let flattened = arr.join('');
    let flatRev = arr.reverse().join('');
    if (flattened.includes(wordToFind) || flatRev.includes(wordToFind)) {
      return true;
    }
  }
  // vertical search both ways
  for (const arr of transposed) {
    let flattened = arr.join('');
    let flatRev = arr.reverse().join('');
    if (flattened.includes(wordToFind) || flatRev.includes(wordToFind)) {
      return true;
    }
  }
  // diagonal search two ways
  for (const arr of diagArr) {
    let flattened = arr.join('');
    let flatRev = arr.reverse().join('');
    if (flattened.includes(wordToFind) || flatRev.includes(wordToFind)) {
      return true;
    }
  }
  // diagonal search other two ways
  for (const arr of revDiagArr) {
    let flattened = arr.join('');
    let flatRev = arr.reverse().join('');
    if (flattened.includes(wordToFind) || flatRev.includes(wordToFind)) {
      return true;
    }
  }
  // if no match is found
  return false;
};

module.exports = wordSearch;