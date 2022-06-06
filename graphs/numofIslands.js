/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  //
  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          //
          if (grid[i][j] == '1') {
              counter += 1;
              depthFirstSearch(grid, i, j);
          }
      }
  }
  return counter;
};

const depthFirstSearch = function(grid, i, j) {
  //check bottom node, update to 0 if 1
  //check right node, update to 0 if 1
  if ( i >= grid.length || j >= grid[0].length || i < 0 || j < 0) {
      return;
  }
  if (grid[i][j] == '0') {
      return;
  }
  
  grid[i][j] = '0';
  depthFirstSearch(grid, i + 1, j );
  depthFirstSearch(grid, i, j + 1);
  depthFirstSearch(grid, i - 1, j);
  depthFirstSearch(grid, i, j - 1);
  
}