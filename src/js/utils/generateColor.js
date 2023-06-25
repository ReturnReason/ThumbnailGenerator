export const genRandomColor = () => {
  const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const colorCode = [];

  while (colorCode.length < 6) {
    const pickIndex = Math.floor(Math.random() * candidate.length);
    colorCode.push(candidate[pickIndex]);
  }

  return colorCode.join('');
};
