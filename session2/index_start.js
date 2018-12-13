// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

//   //created filtered array
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//
//   //sort by length
//   const sorted = wordArr.sort(function(a, b){
//     return b.length - a.length;
//   });
//
//   //if multiple words, put into arrays
//   const longestWordArr = sorted.filter(function(word){
//     return word.length === sorted[0].length;
//   });
//
//   //Check if more than one array value
//   if(longestWordArr.length === 1) {
//     return longestWordArr[0];
//   } else {
//     return longestWordArr;
//   }
// }

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// Using a while loop
 // function chunkArray(arr, len) {

//   //initiate chunked array
//   const chunkedArr = [];
//   //set index
//   let i = 0;
//   //loop while index is less than the array length
//   while(i < arr.length) {
//     //slice out from index to the index + the chunk length and push onto the chunked array
//     chunkedArr.push(arr.slice(i, i + len));
//     //increment by chunk length
//     i += len;
//   }
//   return chunkedArr;
////////////////////////////////////////////////////
//  //initiate chunked array
//  const chunkedArr = [];
//  //loop throuh arr
//  arr.forEach(function(val){
//    //get last element
//    const last = chunkedArr[chunkedArr.length - 1];
//
//    //check if last and if last length is equal to the chunk length
//    if(!last || last.length === len){
//      chunkedArr.push([val]);
//    } else {
//      last.push(val);
//    }
//  });
//  return chunkedArr
// }



// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
//   //Using reduce
//   // return arrays.reduce(function(a, b) {
//   //   return a.concat(b);
//   // });
//   //Using apply
//   // return [].concat.apply([], (arrays));
//   //Using spread
//   // return [].concat(...arrays);
//
// }

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// function isAnagram(str1, str2) {
//   return formatStr(str1) === formatStr(str2);
// }
//
// //Helper Function
// function formatStr(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    if(char === 'z' || char === 'Z'){
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });

  return newStr;
}

// Call Function
const output = letterChanges('Hello there');

console.log(output);
