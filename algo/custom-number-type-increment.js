const increment = (input) => {
  if (input.length === 1) {
    return input[0] < 9 ? [input[0] + 1] : [1, 0];
  }
  const lastDigit = input.pop();
  if (lastDigit < 9) return [...input, lastDigit + 1];
  else return [...increment(input), 0]
}

console.log('[1, 2, 3] + 1 = ' + increment([1, 2, 3]))
console.log('[9, 9] + 1 = ' + increment([9, 9]))
