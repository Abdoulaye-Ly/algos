// Function to check if brackets are closed in a string
// This function checks if all opening brackets '(' have a corresponding closing bracket ')' 
function bracketsAreClosed(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(bracketsAreClosed('(()())')); // true
console.log(bracketsAreClosed('())('));   // false
