import React from "react";
import Cell from "../classes/Cell";
import boardRaw from "../classes/Match.js";
import { Tooltip, Button, Divider, List } from "antd";
import "./Board.css";

const NUMBER_VALUES = 9;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  createCells = () => {
    const board = boardRaw.map((item, idx) => {
      const block = Math.sqrt(NUMBER_VALUES);
      const col = idx % NUMBER_VALUES;
      const row = Math.trunc(idx / NUMBER_VALUES);
      const square = Math.trunc(row / block) * block + Math.trunc(col / block);
      return new Cell(item, col, row, square);
    });
    this.setState(
      { board, messages: [...this.state.messages, "THE GAME STARTED"] },
      this.updatePossibles
    );
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
    this.setState({
      board,
    });
  };

  solveBoosted = () => {
    for (let index = 0; index < 20; index++) {
      this.solve();
    }
  };

  solve = () => {
    if (this.state.error || this.state.isSolved) return;

    let { board } = this.state;
    let changes = {};

    // METHOD 1
    board.forEach((item, idx) => {
      if (item.val === 0) {
        const numberPossibles = item.possible.length;
        if (numberPossibles === 1) {
          changes[idx] = item.possible[0];
        } else if (numberPossibles === 0) {
          this.setState(
            {
              error: true,
              messages: [
                ...this.state.messages,
                `ERROR: numberPossible=0 in Row:${board[idx].row + 1} Col:${
                  board[idx].col + 1
                }`,
              ],
            },
            () => {
              return;
            }
          );
        }
      }
    });

    // METHOD 2
    var squaresAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var rowsAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var colsAux = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    var cellsToUpdate = {};
    board.forEach((item, idx) => {
      if (item.val === 0) {
        item.possible.forEach((item2) => {
          if (squaresAux[item.square].hasOwnProperty(item2)) {
            squaresAux[item.square][item2] = -1;
          } else {
            squaresAux[item.square][item2] = idx;
          }
          if (rowsAux[item.row].hasOwnProperty(item2)) {
            rowsAux[item.row][item2] = -1;
          } else {
            rowsAux[item.row][item2] = idx;
          }
          if (colsAux[item.col].hasOwnProperty(item2)) {
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
    squaresAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
        if (item[key] !== -1) changes[item[key]] = parseInt(key);
      }
    });
    rowsAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
        if (item[key] !== -1) changes[item[key]] = parseInt(key);
      }
    });
    colsAux.forEach((item, idx) => {
      for (let key in item) {
        if (item[key] !== -1) cellsToUpdate[item[key]] = parseInt(key);
        if (item[key] !== -1) changes[item[key]] = parseInt(key);
      }
    });

    // RESULT
    // console.log("changes", changes);
    // console.log("cellsToUpdate", cellsToUpdate);
    this.addAndVerify(changes);
  };

  addAndVerify = (changes) => {
    let { board } = this.state;
    let messages = [];
    for (let name in changes) {
      board.forEach((item, idx) => {
        if (
          item.val !== 0 &&
          (item.row === board[name].row ||
            item.col === board[name].col ||
            item.square === board[name].square) &&
          item.val === changes[name]
        ) {
          this.setState({
            error: true,
            messages: [
              ...this.state.messages,
              `ERROR: Duplicate:${item.val} in Row:${item.row + 1} Col:${
                item.col + 1
              } with Row:${board[name].row + 1} Col:${board[name].col + 1}`,
            ],
          });
        }
      });
      board[name].val = changes[name];
      board[name].possible = [changes[name]];
      messages.push(
        `${changes[name]} in Row:${board[name].row + 1}  Col:${
          board[name].col + 1
        } `
      );
    }
    this.updatePossibles();
    this.setState({
      messages: [...this.state.messages, ...messages],
      board,
    });
  };

  addPossibleValue = (val, idx) => {
    var newVal = {};
    newVal[idx] = val;
    this.addAndVerify(newVal);
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
              <Suggestions
                board={this.state.board}
                addPossibleValue={this.addPossibleValue}
              />
            </td>
            <td>
              <table className="boardtable">
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
                {this.state.error ? (
                  <Button type="primary">ERROR</Button>
                ) : !this.state.isSolved ? (
                  <Button type="primary" onClick={this.solveBoosted}>
                    SOLVE
                  </Button>
                ) : (
                  <Button type="primary">CONGRATULATIONS</Button>
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
    item.possible && item.possible.length > 1 ? (
      <Tooltip placement="top" title={item.possible} color="green">
        <td key={idx} className="newvalue boardtd">
          <span>{item.val !== 0 ? item.val : null}</span>
        </td>
      </Tooltip>
    ) : item.possible ? (
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
  return (
    <>
      <Divider orientation="center">MESSAGES</Divider>
      <div className="boxMessages">
        <List
          size="small"
          bordered
          dataSource={messages}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </>
  );
}

function Suggestions(props) {
  const { board, addPossibleValue } = props;
  return (
    <>
      <Divider orientation="center">SUGGESTIONS</Divider>
      <div className="boxMessages">
        <List
          size="small"
          bordered
          dataSource={board}
          renderItem={(item, idx) => {
            if (item.val === 0 && item.possible.length === 2) {
              return (
                <List.Item>
                  Row:{item.row + 1} Col:{item.col + 1}
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => addPossibleValue(item.possible[0], idx)}
                  >
                    {item.possible[0]}
                  </Button>
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => addPossibleValue(item.possible[1], idx)}
                  >
                    {item.possible[1]}
                  </Button>
                </List.Item>
              );
            }
          }}
        />
      </div>
    </>
  );
}

export default Board;

// $('#cas10').val(3);
