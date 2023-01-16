import './Acttions.scss'

const Actions = () => {
  return (
      <div>
        <div className="item">
          <div><img src={require("../../assets/assets-compressed/actions/miss.png")} alt="miss image"/></div>
          <div className="item__name">Miss</div>
        </div>
        <div className="item">
          <div><img src={require("../../assets/assets-compressed/actions/hit.png")} alt="hit image"/></div>
          <div className="item__name">Hit</div>
        </div>
      </div>
  );
};

export default Actions;