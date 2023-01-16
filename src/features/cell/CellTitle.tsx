import './Cell.scss'

const CellTitle = (props: {name: string}) => {
  return (
      <th className="cell__title">{props.name}</th>
  );
};

export default CellTitle;