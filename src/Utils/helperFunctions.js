export const average = (arr) => {
  return (arr.map((x) => parseInt(x)).reduce((a, b) => a + b)) / (arr.length);
};

export const score = (answer, average) => {
  const diff = Math.abs(answer - average);
  const percentdiff = (diff / average) * 100;
  if (percentdiff < 10) {
    return 10;
  } if (percentdiff < 25) {
    return 5;
  } if (percentdiff < 50) {
    return 1;
  }
  return 0;
};
