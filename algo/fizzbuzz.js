const fizzBuzzTo = (length) => {
  for (let i = 1; i <= length; i++) {
    console.log((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i);
  }
}

fizzBuzzTo(100);
