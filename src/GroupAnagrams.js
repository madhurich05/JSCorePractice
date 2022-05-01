let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagrams = (arr) => {

    let m = new Map();
    for(let str of arr) {
        let word = [...str].sort().join('');
        if(m.has(word)) {
            m.set(word, [...m.get(word), str]);
        } else {
            m.set(word, [str]);
        }        
    }
    return Array.from(m.values());
}

groupAnagrams(arr)
0: (3) ['eat', 'tea', 'ate']
1: (2) ['tan', 'nat']
2: ['bat']
