import {MouseEventHandler} from "react";
import './Button.scss';

const Button = (props: {onPress: MouseEventHandler<HTMLButtonElement>}) => {
  return (
      <button className="btn" onClick={props.onPress}>Reset</button>
  );
};

export default Button;