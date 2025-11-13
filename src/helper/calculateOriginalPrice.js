export const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  if (discountPercentage === 0 || discountedPrice === 0) return 0;
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return Math.round(originalPrice / 1000) * 1000;
};