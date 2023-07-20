import './../../style/Game/button.css';

export const StartAgain = ({reset}) => {
    return(
      <button onClick={reset}  className="custom-btn btn btn-size"><span>Почати заново</span></button>
    )
  }