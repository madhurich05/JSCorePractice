const map = new Map();
map.set(1,'one');
map.set(2,'two');
map.set(3,'three');
map.set(4,'four');

map // logs Map(4) {1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four'}

map.size // logs 4

map.set(5,'five');
map.delete(5); //logs true
map.delete(5); //logs false

map.has(5) //logs false
map.has(4) //logs true


// Iteration ------------------------------------------------------------------------------------------------------------

// Iterate over key,value pairs
for (let [key,value] of map) {
  console.log(`Key: ${key}, value: ${value}`);
}

/* Key: 1, value: one
   Key: 2, value: two
   Key: 3, value: three
   Key: 4, value: four */

// Iterate over keys
for (let key of map.keys()) {
  console.log(`Key: ${key}`);
}

/*
Key: 1
Key: 2
Key: 3
Key: 4
*/

// Iterate over values

for (let val of map.values()) {
  console.log(`Value: ${val}`);
}
/*Value: one
Value: two
Value: three
Value: four*/

// Map to Array conversion ------------------------------------------------------------------------------------------------------------

// 2D array to map

const p = [['fName','Madhuri'],['lastName', 'Chadalapaka']];
const pMap = new Map(p)

pMap // Logs Map(2) {'fName' => 'Madhuri', 'lastName' => 'Chadalapaka'}


// Map to Array

const arrFromMap = Array.from(pMap);
arrFromMap // Logs (2) [Array(2), Array(2)]0: (2) ['fName', 'Madhuri']1: (2) ['lastName', 'Chadalapaka']length: 2[[Prototype]]: Array(0)

map.clear()
map //logs Map(0) {size: 0} as all elements are cleared
map.size // 0



