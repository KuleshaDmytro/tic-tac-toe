import './../../style/modal.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Modal = ({winner, isOpen}) => {

    const modalRef = useRef(null);
    const [isModalVisible, setModalVisibility] = useState(false);
    const [hideOverflow, setHideOverflow] = useState(false);


    useEffect(() => {
        if (isOpen) {
            setHideOverflow(true)
            setModalVisibility(isOpen);
        }
    },[isOpen])


    const handleClick = () => {

        const modalElement = modalRef.current;
        modalElement.className = ['modal modalIsClose']
    

        setTimeout(() => {
            setHideOverflow(false);
            setModalVisibility(false)
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

