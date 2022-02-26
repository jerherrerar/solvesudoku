export const parseBoardHtmlJson = (boardHtml) => {
  let boardRaw = [];

  for (let index = 0; index < 81; index++) {
    const nameClass = "cas" + index;
    let location = boardHtml.indexOf(nameClass);
    let start = location + 13;
    if (index > 9) start++;
    let value = boardHtml.substr(start, 1);
    if (value === '"') {
      value = 0;
    }
    boardRaw.push(parseInt(value));
  }
  return boardRaw;
};
