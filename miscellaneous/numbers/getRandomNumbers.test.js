const getRandomNumbers = (length = 0) => {
  let numbers = [];
  for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random()));
  }
  return numbers;
};

describe('getRandomNumbers', () => {
  it('Test Case', () => {
    expect(getRandomNumbers()).toHaveLength(0)
    expect(getRandomNumbers(5)).toHaveLength(5)
    expect(getRandomNumbers(10)).toHaveLength(10)
  })
})
