import cn from 'classnames';
import './Cell.scss';
import {useEffect, useState} from "react";

const Cell = (props: { cell: number }) => {
  const {cell} = props;

  const [state, setState] = useState({
    miss: false,
    hit: false,
  });

  useEffect(() => {
    setState({
      miss: false,
      hit: false
    })
  }, [])

  const changeCell = () => {
    if (cell) {
      setState({...state, hit: true})
    } else {
      setState({...state, miss: true})
    }
  }

  const cellClass = cn('cell', {
    'cell-ship': cell,
    'cell-hit': state.hit,
    'cell-miss': state.miss
  });

  return (
      <td className={cellClass} onClick={() => changeCell()}></td>
  );
};

export default Cell;