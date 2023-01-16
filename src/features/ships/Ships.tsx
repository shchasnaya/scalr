import React, {useEffect, useState} from 'react';
import "./Ships.scss"
import Cell from "./cell/Cell";
import CellTitle from "./cell/CellTitle";
import Button from "./button/Button";

interface objShip {
  x: number,
  y: number,
  kx: number,
  ky: number,
  decks?: number,
  shipName?: string,
}


const Ships = () => {

  const columnTitle = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G'];
  const rowTitle = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [matrix, setMatrix] = useState<Array<Array<number>>>(Array(10).fill("").map(() => Array(10).fill(0)));
  const [refresh, setRefresh] = useState(false);

  const shipData = [
    [1, 4],
    [2, 3],
    [3, 2],
    [4, 1]
  ]

  const resetLocationShips = () => {
    setMatrix(matrix.map(item => item.fill(0)));
    setRefresh(() => !refresh);
    randomLocationShips();
  }

  const getRandom = (n: number) => Math.floor(Math.random() * (n + 1));

  const randomLocationShips = () => {
    shipData.forEach(ship => {
      let amount = ship[0];
      let decks = ship[1];
      for (let i = 0; i < amount; i++) {
        let options: objShip = getCoordsDecks(decks)!;
        options.decks = decks;
        options.shipName = `${decks}-desks-${i + 1}`;
        createShip(options);
      }
    })
  }

  const getCoordsDecks: any = (decks: number) => {
    let kx = getRandom(1), ky = (kx === 0) ? 1 : 0,
        x, y;
    if (kx == 0) {
      x = getRandom(9);
      y = getRandom(10 - decks);
    } else {
      x = getRandom(10 - decks);
      y = getRandom(9);
    }

    const obj: objShip = {x, y, kx, ky}
    const result = checkLocationShip(obj, decks);
    if (!result) return getCoordsDecks(decks);
    return obj;
  }

  const createShip = (obj: objShip) => {
    for (let k = 0; k < obj.decks!; k++) {
      let i = obj.x + k * obj.kx, j = obj.y + k * obj.ky;
      let newMatrix = [...matrix];
      newMatrix[i][j] = 1;
      setMatrix(newMatrix);
    }
  }

  const checkLocationShip = (obj: any, decks: number) => {
    let {x, y, kx, ky, fromX, toX, fromY, toY} = obj;
    fromX = (x === 0) ? x : x - 1;
    if (x + kx * decks === 10 && kx === 1) toX = x + kx * decks;
    else if (x + kx * decks < 10 && kx === 1) toX = x + kx * decks + 1;
    else if (x === 9 && kx === 0) toX = x + 1;
    else if (x < 9 && kx === 0) toX = x + 2;
    fromY = (y === 0) ? y : y - 1;
    if (y + ky * decks === 10 && ky === 1) toY = y + ky * decks;
    else if (y + ky * decks < 10 && ky === 1) toY = y + ky * decks + 1;
    else if (y === 9 && ky === 0) toY = y + 1;
    else if (y < 9 && ky === 0) toY = y + 2;
    if (toX === undefined || toY === undefined) return false;
    return matrix.slice(fromX, toX)
        .filter(arr => arr.slice(fromY, toY).includes(1))
        .length <= 0;

  }

  useEffect(() => {
    randomLocationShips();
  }, [])

  return (
      <div>
        <Button onPress={resetLocationShips} />
        <table className="table">
          <thead>
          <tr>
            <td></td>
            {columnTitle.map((item, index) => (
                <CellTitle key={index} name={item}/>
            ))}
          </tr>
          </thead>
          <tbody>
          {matrix.map((item, index) => (
              <>
                <tr className="table__row" key={index}>
                  <CellTitle key={index} name={rowTitle[index]} />
                  {item.map((cell, indexCell) => (
                      <Cell key={`${index}${indexCell}${refresh}`} cell={cell} />
                  ))}
                </tr>
              </>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default Ships;