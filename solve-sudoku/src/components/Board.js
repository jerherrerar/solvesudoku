import React from "react";
import Cell from "../classes/Cell";
import boardRaw from "../classes/Match.js";
import "./Board.css";

const NUMBER_VALUES = 9;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardRaw,
      board: [],
      isSolved: false,
      error: false,
      messages: [],
      newVal: "",
      newRow: "",
      newCol: "",
    };
  }

  componentDidMount() {
    this.createCells();
    this.setState({
      messages: [...this.state.messages, "THE GAME STARTED"],
    });
  }

  createCells = () => {
    const { boardRaw } = this.state;
    const board = boardRaw.map((item, idx) => {
      const block = Math.sqrt(NUMBER_VALUES);
      const col = idx % NUMBER_VALUES;
      const row = Math.trunc(idx / NUMBER_VALUES);
      const square = Math.trunc(row / block) * block + Math.trunc(col / block);
      return new Cell(item, col, row, square);
    });
    this.setState({ board });
  };

  updatePossibles = () => {
    let { board } = this.state;
    let isSolved = true;
    //UPDATE POSSIBLE VALUES OF EACH CELL
    board.forEach((item) => {
      if (item.val !== 0) {
        board.forEach((item2) => {
          if (
            item2.val === 0 &&
            (item2.row === item.row ||
              item2.col === item.col ||
              item2.square === item.square)
          ) {
            item2.possible = item2.possible.filter(
              (item3) => item3 !== item.val
            );
          }
        });
      } else {
        isSolved = false;
      }
    });
    if (isSolved) {
      this.setState({
        isSolved,
      });
    }
  };

  solve = () => {
    if (this.state.error || this.state.isSolved) return;

    let { board } = this.state;

    this.updatePossibles();

    //VERIFY IF THERE IS ONLY ONE TRUE
    let messages = [];
    for (let item of board) {
      if (item.val === 0) {
        const numberPossibles = item.possible.length;
        if (numberPossibles === 1) {
          item.val = item.possible[0];
          // console.log(
          //   `NEW VALUE(${item.val})  ---->  Row:${item.row + 1}  Col:${
          //     item.col + 1
          //   }`
          // );
          messages.push(
            `${item.val} in Row:${item.row + 1}  Col:${item.col + 1} `
          );
        } else if (numberPossibles === 0) {
          this.setState({
            error: true,
          });
          messages.push(`ERROR`);
          break;
        }
      }
    }
    this.setState({
      messages: [...this.state.messages, ...messages],
    });
  };

  solveSquareRowCol = () => {
    if (this.state.error) return;

    var { board } = this.state;
    var squaresAux = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    var rowsAux = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    var colsAux = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    var squaresAuxJson = {};
    var rowsAuxJson = {};
    var colsAuxJson = {};
    var cellsToUpdate = {};
    var messages = [];

    for (let item of board) {
      if (item.val === 0) {
        item.possible.forEach((item2, idx) => {
          squaresAux[item.square][idx] = squaresAux[item.square][idx] + item2;
          rowsAux[item.row][idx] = rowsAux[item.row][idx] + item2;
          colsAux[item.col][idx] = colsAux[item.col][idx] + item2;
        });
      }
    }
    // console.log("squaresAux", squaresAux);
    // console.log("rowsAux", rowsAux);
    // console.log("colsAux", colsAux);

    squaresAux.forEach((item, idx) => {
      item.forEach((item2, idx2) => {
        if (item2 === 1) {
          console.log(item2, "**", idx + 1, "**", idx2 + 1);
          squaresAuxJson[idx] = idx2;
        }
      });
    });
    rowsAux.forEach((item, idx) => {
      item.forEach((item2, idx2) => {
        if (item2 === 1) {
          //console.log(item2, "**", idx + 1, "**", idx2 + 1);
          rowsAuxJson[idx] = idx2;
        }
      });
    });
    colsAux.forEach((item, idx) => {
      item.forEach((item2, idx2) => {
        if (item2 === 1) {
          colsAuxJson[idx] = idx2;
        }
      });
    });
    // console.log("squaresAuxJson", squaresAuxJson);
    // console.log("rowsAuxJson", rowsAuxJson);
    // console.log("colsAuxJson", colsAuxJson);
    for (let item of board) {
      if (item.val !== 0) continue;
      for (let name in squaresAuxJson) {
        if (item.square === parseInt(name)) {
          if (item.possible[squaresAuxJson[name]] === 1) {
            //item.val = squaresAuxJson[name] +1;
            cellsToUpdate[item.row * 9 + item.col] = squaresAuxJson[name] + 1;
            // messages.push(
            //   `SQU-->${item.val} in Row:${item.row + 1}  Col:${item.col + 1} `
            // );
          }
        }
      }
      for (let name in rowsAuxJson) {
        if (item.row === parseInt(name)) {
          if (item.possible[rowsAuxJson[name]] === 1) {
            //item.val = rowsAuxJson[name] +1;
            cellsToUpdate[item.row * 9 + item.col] = rowsAuxJson[name] + 1;
            // messages.push(
            //   `ROW-->${item.val} in Row:${item.row + 1}  Col:${item.col + 1} `
            // );
          }
        }
      }
      for (let name in colsAuxJson) {
        if (item.col === parseInt(name)) {
          if (item.possible[colsAuxJson[name]] === 1) {
            //item.val = colsAuxJson[name] +1;
            cellsToUpdate[item.row * 9 + item.col] = colsAuxJson[name] + 1;
            // messages.push(
            //   `COL-->${item.val} in Row:${item.row + 1}  Col:${item.col + 1} `
            // );
          }
        }
      }
    }
    console.log("cellsToUpdate", cellsToUpdate);
    for (let name in cellsToUpdate) {
      console.log("zzzzz", name, cellsToUpdate[name]);
      board[name].val = cellsToUpdate[name];
      messages.push(
        `${cellsToUpdate[name]} in Row:${board[name].row + 1}  Col:${
          board[name].col + 1
        } `
      );
    }
    this.setState({
      messages: [...this.state.messages, ...messages],
      // board,
    });
  };

  solveSquareRowColv2 = () => {
    this.updatePossibles();
    if (this.state.error || this.state.isSolved) return;

    var { board } = this.state;
    var squaresAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var rowsAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var colsAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var cellsToUpdate = {};
    var messages = [];

    board.forEach((item, idx) => {
      if (item.val === 0) {
        item.possible.forEach((item2) => {
          if (squaresAux[item.square][item2]) {
            squaresAux[item.square][item2] = -1;
          } else {
            squaresAux[item.square][item2] = idx;
          }
          if (rowsAux[item.row][item2]) {
            rowsAux[item.row][item2] = -1;
          } else {
            rowsAux[item.row][item2] = idx;
          }
          if (colsAux[item.col][item2]) {
            colsAux[item.col][item2] = -1;
          } else {
            colsAux[item.col][item2] = idx;
          }
        });
      }
    });
    // console.log("squaresAux", squaresAux);
    // console.log("rowsAux", rowsAux);
    // console.log("colsAux", colsAux);

    //GENERATE DICT WITH ALL UPDATES
    squaresAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
      }
    });
    rowsAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
      }
    });
    colsAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
      }
    });

    //UPDATE CELLS
    for (let key in cellsToUpdate) {
      board[key].val = cellsToUpdate[key];
      board[key].possible = [cellsToUpdate[key]];
      messages.push(
        `${cellsToUpdate[key]} in Row:${board[key].row + 1}  Col:${
          board[key].col + 1
        } `
      );
    }
    this.setState({
      messages: [...this.state.messages, ...messages],
    });
  };

  addValue = () => {
    if (this.state.error) return;
    const { board, newVal, newRow, newCol } = this.state;
    board[(newRow - 1) * NUMBER_VALUES + (newCol - 1)].val = parseInt(newVal);
    board[(newRow - 1) * NUMBER_VALUES + (newCol - 1)].possible = [parseInt(newVal)];
    this.setState({
      messages: [
        ...this.state.messages,
        `MANUAL: ${newVal} in Row:${newRow}  Col:${newCol} `,
      ],
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const content = [];
    for (var i = 0; i < NUMBER_VALUES; i++) {
      content.push(
        <Row
          key={i}
          data={this.state.board.slice(
            i * NUMBER_VALUES,
            (i + 1) * NUMBER_VALUES
          )}
        />
      );
    }

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <label>
                  Value:
                  <input
                    type="text"
                    name="newVal"
                    value={this.state.newVal}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Row:
                  <input
                    type="text"
                    name="newRow"
                    value={this.state.newRow}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Col:
                  <input
                    type="text"
                    name="newCol"
                    value={this.state.newCol}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <button onClick={this.addValue}>ADD VALUE</button>
              </div>
            </td>
            <td>
              <table className="boardtable">
                <caption>Solve Sudoku</caption>
                <colgroup className="boardcolgroup">
                  <col />
                  <col />
                  <col />
                </colgroup>
                <colgroup className="boardcolgroup">
                  <col />
                  <col />
                  <col />
                </colgroup>
                <colgroup className="boardcolgroup">
                  <col />
                  <col />
                  <col />
                </colgroup>
                <tbody className="boardtbody">{content.slice(0, 3)}</tbody>
                <tbody className="boardtbody">{content.slice(3, 6)}</tbody>
                <tbody className="boardtbody">{content.slice(6, 9)}</tbody>
              </table>
              <div>
                {!this.state.isSolved ? (
                  <>
                    <button onClick={this.solve}>SOLVE #1</button>
                    <br />
                    <button onClick={this.solveSquareRowColv2}>
                    SOLVE #2
                    </button>
                  </>
                ) : (
                  <button>CONGRATULATIONS</button>
                )}
              </div>
            </td>
            <td>
              <Messages messages={this.state.messages} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function Row(props) {
  const { data } = props;
  const cells = data.map((item, idx) =>
    item.possible ? (
      <td key={idx} className="newvalue boardtd">
        <span>{item.val !== 0 ? item.val : null}</span>
      </td>
    ) : (
      <td key={idx} className="oldvalue boardtd">
        <span>{item.val !== 0 ? item.val : null}</span>
      </td>
    )
  );
  return <tr>{cells}</tr>;
}

function Messages(props) {
  const { messages } = props;
  const listItems = messages.map((item, idx) => <li key={idx}>{item}</li>);
  return (
    <>
      <h4>MESSAGES</h4>
      <div className="box">
        <ul>{listItems}</ul>
      </div>
    </>
  );
}

export default Board;

/* <View style={styles.View}> */

// const styles = StyleSheet.create({
//   View: {
//     // backgroundColor: colors.primary,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
