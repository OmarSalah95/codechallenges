// Good morning! Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

// Input:

// 'dcba'
// 'zycxbwa'

// 'AzycxbCwBaA'

// Expected Output:

// 'abcd'
// 'abcwxyz'

// 'AABCabcwxyz'

function sortString(str) {
  return str
    .split("")
    .sort()
    .join("");
}

console.log(sortString("dcba"));
console.log(sortString("zycxbwa"));
console.log(sortString("AzycxbCwBaA"));

// Expected function: `commonElements`

// Write a function called `commonElements` that has parameters for two arrays.
// Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

//  Input Example:
// ```
// [1, 2, 3, 4] [3, 4, 5, 6]
// ['a', 'b', 'c'] ['x', 'y', 'z', 'a']
// [1, 2, 3] [4, 5, 6]
// ```
// Output Example:
// ```
// [3, 4]
// ['a']
// []
// ```
// Required for submission:
// ```
// module.exports = {
//   commonElements
// }
// ```

function commonElements(arr1, arr2) {
  let matchingNums = [];
  arr1.forEach(el => {
    if (arr2.includes(el)) {
      if (!matchingNums.includes(el)) {
        return matchingNums.push(el);
      }
    }
  });
  return matchingNums;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(commonElements(arr1, arr2));

// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

// toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"
// toCamelCase("The_stealth_warrior")
// returns "TheStealthWarrior"

function toCamelCase(str) {
  if (str.includes("-")) {
    const split = str.split("-");
    const firstLetter = split[1][1].toUpperCase();
    const secondLetter = split[2][1].toUpperCase();
  } else {
    return str.split("_");
  }
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_stealth_warrior"));
