const rev = (n) => {
  var rev = 0;
  square_rev = n * n; //144
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = parseInt(n / 10);
  } //21
  rev_square = rev * rev; //441
  return [rev, square_rev, rev_square];
};
const avg = (x, y) => {
  var average = (x + y) / 2;
  return average;
};
module.exports = { rev, avg };
