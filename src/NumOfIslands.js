/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/


const numIslands = (grid) => {
    let count = 0;

    for (let row=0;  row<grid.length; row++) {
        for (let col=0; col<grid[row].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                traverse(row, col, grid);
            }
        }
    }
    return count;
}


let traverse = (row, col, grid) => {
    // Check boundary conditions
    if(row<0 || col<0 || row>=grid.length || col>=grid[row].length ||  grid[row][col] === '0') return;

    // Otherwise
       grid[row][col] = '0'; // Mark it visited

       traverse(row, col+1, grid); // Right
       traverse(row, col-1, grid); // Left
       traverse(row+1, col, grid); // Bottom
       traverse(row-1, col, grid); // Top

}
