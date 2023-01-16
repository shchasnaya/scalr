import {localization} from "../../localization/Localization";
import './Title.scss'

const Title = () => {
  return (
      <div className="title">{localization.title}</div>
  );
};

export default Title;