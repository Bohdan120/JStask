function validSolution(board) {
    function isValidGroup(arr) {
      const set = new Set(arr);
      return set.size === 9 && !set.has(0);
    }
  
    for (let row of board) {
      if (!isValidGroup(row)) {
        return false;
      }
    }
  
    for (let col = 0; col < 9; col++) {
      const column = [];
      for (let row = 0; row < 9; row++) {
        column.push(board[row][col]);
      }
      if (!isValidGroup(column)) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const block = [];
        for (let row = i; row < i + 3; row++) {
          for (let col = j; col < j + 3; col++) {
            block.push(board[row][col]);
          }
        }
        if (!isValidGroup(block)) {
          return false;
        }
      }
    }
  
    return true;
  }

  const testBoard = [
    [5, 5, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 0, 6, 7],
    [8, 5, 9, 7, 0, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 2, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 1, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  
  console.log(validSolution(testBoard));  