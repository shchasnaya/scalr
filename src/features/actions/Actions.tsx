import {localization} from "../../localization/Localization";
import './Acttions.scss'

const Actions = () => {

  const {actions} = localization;

  return (
      <div>
        <div className="item">
          <div><img src={require("../../assets/assets-compressed/actions/miss.png")} alt="miss image"/></div>
          <div className="item__name">{actions.miss}</div>
        </div>
        <div className="item">
          <div><img src={require("../../assets/assets-compressed/actions/hit.png")} alt="hit image"/></div>
          <div className="item__name">{actions.hit}</div>
        </div>
      </div>
  );
};

export default Actions;