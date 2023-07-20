import './../../style/Modal/modal.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Howl} from 'howler';
import victory from './../../sounds/victory.mp3'

export const Modal = ({winner, isOpen, reset}) => {

    const modalRef = useRef(null);
    const [isModalVisible, setModalVisibility] = useState(false);
    const [hideOverflow, setHideOverflow] = useState(false);

    let sound = new Howl({
        src: [victory],
        volume: 0.3,
      });

    useEffect(() => {
        {isModalVisible && 
       
            sound.play();
        }
    })

    useEffect(() => {
        if (isOpen) {
            setHideOverflow(true)
            setModalVisibility(isOpen);
        }
    },[isOpen])


    const handleClick = () => {

        sound.fade( 0.3 , 0 , 1000);

        const modalElement = modalRef.current;
        modalElement.className = ['modal modalIsClose']
    

        setTimeout(() => {
            setHideOverflow(false);
            setModalVisibility(false);
            // reset();
        }, 300);
 
    }


    useEffect(() => {
        document.body.style.overflow = hideOverflow ? 'hidden' : 'auto';
      }, [hideOverflow])

    return (
    <>
    {isModalVisible &&
    
        <div className='modal_container' id='container' onClick={handleClick}>
            <div className={`modal-background`}>
                <div className={`modal modalIsOpen`} ref={modalRef}> 
                    <h2>{winner}</h2>
                    <div className='cup'></div>
                </div>
            </div>
        </div>
    }

    </>
    );
};

