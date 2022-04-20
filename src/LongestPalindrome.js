var longestPalindrome = function(s) {
    
	if (s === null) return '';
	if(s.length <= 1) return s;
	
	// construct a 2D array
    const resDP = [...new Array(s.length)].map(_ => new Array(s.length));
	
    let longestPalindromeSubStr = '';
    
	// base case for one character
    for(let i = 0; i < s.length; i++) {
        resDP[i][i] = true;
        longestPalindromeSubStr = s[i];
    }
    
	// base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) resDP[i][i+1] = true;
        if(resDP[i][i+1]) longestPalindromeSubStr = s.substring(i, i + 2); 
    }

    // expand to three or more characters
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 1; j < s.length; j++) {
            resDP[i][j] = resDP[i+1][j-1] && s[i] === s[j];
            if(resDP[i][j]) longestPalindromeSubStr = longestPalindromeSubStr.length < (j - i + 1) ? s.substring(i, j + 1) : longestPalindromeSubStr; 
        }
    }
    
    return longestPalindromeSubStr;
}
