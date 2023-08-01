import { Game } from './Game';
import { StartAgain } from './StartAgain';
import { useGameState } from '../../state/useGameState';
import { Rules } from './Rules';
import { Modal } from '../Modal/Modal';
import './../../style/PlayingField/playingField.css'
import './../../style/main.css'

export const PlayingField = () => {

    const {reset, matrix, fire, won, who, num} = useGameState();


    if (!won && num === 9) {
      alert(`Draw`);    
    }


    const whoWon = who === 1 ? "X Won": "O Won";
  
    return(
        <div className={`playingField_container pos`}>
          
          <Modal 
            winner={whoWon} 
            isOpen={won} 
            reset={reset}/>
          <div className='playingField_wrapper'>
           

            <Game 
            matrix={matrix} 
            onFire={fire}/>

            <StartAgain 
            reset={reset}/>

            <Rules/>
          </div>

        </div>
    )
}