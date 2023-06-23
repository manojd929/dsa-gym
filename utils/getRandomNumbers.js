const getRandomNumbers = (length = 0) => {
  let numbers = [];
  for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random()));
  }
  return numbers;
};

export default getRandomNumbers;
