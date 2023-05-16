//intial solution

function multiplesOf3and5(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

multiplesOf3and5(1000);
