// Difficulty: 4

// Recursion
// factorial: 5! = 5 * 4 * 3 * 2 * 1

// Recursive Solution
function numPermutations(letters) {
    if (letters.length === 1) {
      return 1;
    }
  
    return letters.length * numPermutations(letters.slice(1));
  }
  
// Iterative Solution
// function numPermutations(letters) {
//   let total;
//   for (let i = 1; i <= letters.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }

//   return total;
// }
  
  console.log(numPermutations("hello"));