const getNextId = (arr, id, input) => {
  let { 0: num } = id.split(".");

  const getNextQuestion = () => {
    num = String(parseInt(num) + 1);
    let newId = `${num}${input ? "." + input : ""}`;
    let matchIdWithTag = arr.find(({ id }) => id === newId);
    let matchIdWithoutTag = arr.find(({ id }) => id === num);
    if (!matchIdWithTag && !matchIdWithoutTag && num < arr.length) {
      input = "";
      getNextQuestion(arr, num);
    } else if (matchIdWithTag) {
      return newId;
    } else return `${num}`;
  };

  return getNextQuestion();
};

export default getNextId;
