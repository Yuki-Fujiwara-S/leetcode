/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    // counter
    let counter = 0;
    
    // need a nester forloop to target each element
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++) {
            // check if land
            if(grid[i][j] === "1"){
                counter++;
                dfs(grid, i, j);
            }
        }
    }
    return counter;
    
};

const dfs = function(grid, i, j) {
    let column = grid.length;
    let row = grid[0].length;
    // make sure the search remains within the bounds
    if (i < 0 || j < 0 || i >= column || j >= row) {
        return;
    }
    
    if (grid[i][j] === "0") {
        return;
    }
    
    // convert land to water once done with exploration
    grid[i][j] = "0";
    
    // recursive call to do exploration
    dfs(grid, i, j + 1) // right
    dfs(grid, i, j - 1) // left
    dfs(grid, i + 1, j) // down
    dfs(grid, i - 1, j) // up
    
}