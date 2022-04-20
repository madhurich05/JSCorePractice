let nums = [2,7,11,15];
let target = 9;


var twoSum = function(nums, target) {
    let m = new Map();

    let i = 0;
    for (let n of nums) {             
        if(m.has(n)) return [m.get(n),i];
        m.set(target-n,i);
        i++;
        
    }
    return [];
};


// Reverse String ————————————————————————————————————————————————————————

function reverseString(str) {
return str ? reverseString(str.substr(1)) + str[0] : str;
}

* Find Max depth of a binary tree recursive:  
var maxDepth = function(root) {
      return (root) ? Math.max(maxDepth(root.left),maxDepth(root.right)) + 1 : 0;
};


// Rotate Image ————————————————————————————————————————————————————————

var rotate = function(matrix) {
 
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix.length; j++){
            // Transpose the matrix ES6 way
            
            if(i===j) break;
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]];
            
        }        
    }
    
    // Reverse the transposed matrix to rotate
        
        for (let i=0; i<matrix.length; i++){
            matrix[i] = matrix[i].reverse();
        }
};
