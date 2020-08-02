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
    };
  }

  componentDidMount() {
    this.createCells();
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

  solve = () => {
    let { board } = this.state;

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
            item2.possible[item.val - 1] = 0;
          }
        });
      }
    });

    //VERIFY IF THERE IS ONLY ONE TRUE
    let isSolved = true;
    board.forEach((item) => {
      if (item.val == 0) {
        const sum = item.possible.reduce((a, b) => a + b, 0);
        if (sum == 1) {
          const index = item.possible.findIndex((item2) => item2 === 1);
          item.val = index + 1;
          console.log(`NEW VALUE(${item.val})  ---->  Row:${item.row+1}  Col:${item.col+1}`);          
        }
        else{
          isSolved = false;
        }
      }
    });

    //SAVE
    this.setState({ board, isSolved });
  };

  render() {
    const content = [];
    for (var i = 0; i < NUMBER_VALUES; i++) {
      content.push(
        <Row
          data={this.state.board.slice(
            i * NUMBER_VALUES,
            (i + 1) * NUMBER_VALUES
          )}
        />
      );
    }

    return (
      <div>
        <br />
        <table>
          <caption>Solve Sudoku</caption>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>{content}</tbody>
        </table>
        <div>
          <br />
          {this.state.isSolved ?
            <button>CONGRATULATIONS</button>
            :
            <button onClick={this.solve}>SOLVE</button> 
          }
        </div>
      </div>
    );
  }
}

function Row(props) {
  const { data } = props;
  const cells = data.map((item, idx) =>
  (item.possible ?
    <td className='newvalue'><span>{item.val!==0?item.val:null}</span></td>
    :
    <td className='oldvalue'><span>{item.val!==0?item.val:null}</span></td>
  )
  );
  return <tr>{cells}</tr>;
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
