Word Squares: find valid word square

const arr = [
   "abcd",
   "bnrt",
   "crm",
   "dt"
];
const findValidSquares = (arr = []) => {
   for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
         if(i >= arr.length || j >= arr.length || j >= arr[i].length || i >= arr[j].length){
            return false;
         };
         if(arr[i][j] !== arr[j][i]){
            return false;
         }
      }
   };
   return true;
};
console.log(findValidSquares(arr));
 

// Explanation:
// The first row and first column both read "abcd".
// The second row and second column both read "bnrt".
// The third row and third column both read "crmy".
// The fourth row and fourth column both read "dtye".

// Therefore, it is a valid word square.
