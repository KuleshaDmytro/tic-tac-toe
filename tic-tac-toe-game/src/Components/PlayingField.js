import { Game } from './../Components/Game';
import { StartAgain } from './../Components/StartAgain';
import { useGameState } from './../state/useGameState';
import { Rules } from './Rules';
import { Modal } from './../Components/Modal/Modal';
import './../style/PlayingField/playingField.css'
import './../style/main.css'
// import { useState } from 'react';
// import { useEffect } from 'react';

export const PlayingField = () => {

    const {reset, matrix, fire, won, who, num} = useGameState();


    if (!won && num === 9) {
      alert(`Draw`);    
    }


    const whoWon = who === 1 ? "X Won": "O Won";
  
    return(
        <div className={`playingField_container pos`}>
          <Modal winner={whoWon} isOpen={won} />
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