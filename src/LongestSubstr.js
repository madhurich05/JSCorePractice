/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let lPointer = 0,
        rPointer = 0,
        max = 0;
    
    const strLen = s.length;
    const substr = new Set();
    
    while(rPointer < strLen) {
        if(!substr.has(s[rPointer])) {
            substr.add(s[rPointer]);
            rPointer++;
            max = Math.max(substr.size,max);
        } else {
            substr.delete(s[lPointer]);
            lPointer++;
            
        }
    }
    return max;
};
