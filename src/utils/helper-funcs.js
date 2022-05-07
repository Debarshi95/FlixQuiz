export const getFilteredQuestion = (name, data = []) => {
  return data?.find((item) => item.name === name);
};
