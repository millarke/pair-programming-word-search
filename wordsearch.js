const transpose = function(matrix) {
  const newArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      newArray[k].push(matrix[i][k]);
    }
  }
  
  return newArray;
};

// const wordSearch = (letters, word) => {
//  const horizontalJoin = letters.map(ls => ls.join(''))
//   for (const l of horizontalJoin) {
//         if (l.includes(word)) {
//         return true;
//     }
// }
//     return false
// };



const wordSearch = function(letters,word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  // transpose the matrix to search through the columns.
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  
  
  return false;
};

module.exports = wordSearch;