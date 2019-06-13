const productFib = (prod) => {
  let n2 = 0;
  let n1 = 1;
  let n = 1;

  while (n2 * n1 < prod) {
    n2 = n1;
    n1 = n;
    n = n2 + n1;
  }

  return [n2 , n1, n2 * n1 === prod];
};

export { productFib }