import {MouseEventHandler} from "react";
import {localization} from "../../localization/Localization";
import './Button.scss';

const Button = (props: {onPress: MouseEventHandler<HTMLButtonElement>}) => {

  return (
      <button className="btn" onClick={props.onPress}>{localization.button}</button>
  );
};

export default Button;