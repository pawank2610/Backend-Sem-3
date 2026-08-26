

function isEven(num) {
  const n = Number(num);

  if (Number.isNaN(n)) {
    throw new Error("isEven() expects a valid number");
  }

  return n % 2 === 0;
}


module.exports = isEven;
