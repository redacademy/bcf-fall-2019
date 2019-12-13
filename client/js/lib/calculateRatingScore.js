export const calculateRatingScore = reviews => {
  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, cur) => {
      return acc + cur.score;
    }, 0);
    const average = Math.ceil(sum / reviews.length);
    return average;
  } else {
    return 0;
  }
};
