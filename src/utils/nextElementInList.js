const nextElementInList = (list, currentValue) => {
  const currentValueIndex = list.indexOf(currentValue);
  const nextValueIndex = (currentValueIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
