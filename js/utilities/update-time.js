export const getMin = (time) => {
  const result = Math.floor(time / 60);
  return result < 10 ? `0` + result : result;
};

export const getSec = (time)=> {
  const result = (time % 60).toFixed(0);
  return result < 10 ? `0` + result : result;
};

export const getRadius = (ratio, radius) => {
  const stroke = Math.round(2 * Math.PI * radius);
  const offset = stroke - Math.round(stroke * ratio);
  return {
    stroke,
    offset,
  };
};

