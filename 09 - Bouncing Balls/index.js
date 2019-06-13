const isVisible = (h,  bounce,  window) => h * bounce > window;

const bounceBall = (h,  bounce,  window, acc) => isVisible(h,  bounce,  window) 
  ? bounceBall(h * bounce,  bounce,  window, acc + 2) 
  : acc;

const bouncingBall = (h,  bounce,  window) => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  return bounceBall(h,  bounce,  window, 1);
};

export { isVisible, bouncingBall }