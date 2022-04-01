const s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(1); // Doesn't add as it is already present

s.size // 4
s // Set(4) {1, 2, 3, 4}

s.has(4) // true
s.has(5) // false

s.delete(4) //true
s.delete(5) //false

// Iterating over set
for (let value of s) {
    console.log(value)
}
/* 
1
2
3 */


// Array to Set conversion
const a = [1,2,4,4,5,6,2]
const s1 = new Set(a)

s1 // logs Set(5) {1, 2, 4, 5, 6} // no duplicates


// Set to Array
[...s1] // logs (5) [1, 2, 4, 5, 6]
