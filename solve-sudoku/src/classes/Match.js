// 1. Go Ispector (Ctrl+Shift+C)
// 2. Copy innerHtml from <div id="grilla" class="grilla" ... >

// * class=casilla   ----  without initial value
// * class=casilla2  ----  with initial value

// * id=cas0  to id=cas80

const dataMatch = `




`;

let boardRaw = [];

for (let index = 0; index < 81; index++) {
  const nameClass = "cas" + index;
  let location = dataMatch.indexOf(nameClass);
  let start = location + 13;
  if (index > 9) start++;
  let value = dataMatch.substr(start, 1);
  if (value === '"') {
    value = 0;
  }
  boardRaw.push(parseInt(value));
}

export default boardRaw;
