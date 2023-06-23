function countTo(max, current) {
  if (current > max) {
    return;
  }

  console.log(current);
  countTo(max, current + 1);
}

countTo(10, 1);
countTo(100, 91);
