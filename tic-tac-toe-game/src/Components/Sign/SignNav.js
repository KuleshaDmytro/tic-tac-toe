import './../../style/Sign/sign.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SignNav = () => {
    const [activeBtn, setActiveBtn] = useState("in");

    useEffect(() => {
        const storedActiveBtn = localStorage.getItem('activeBtn');
        if (storedActiveBtn) {
            setActiveBtn(storedActiveBtn);
        }
    }, []);

    const handleClickSignIn = () => {
        setActiveBtn("in");
        localStorage.setItem('activeBtn', 'in');
    };

    const handleClickSignUp = () => {
        setActiveBtn("up");
        localStorage.setItem('activeBtn', 'up');
    };

    return (
        <div className='change_sign'>
            <Link to={'/sign/in'}>
                <button
                    className={`sign ${activeBtn === 'in' ? 'active' : ''}`}
                    onClick={handleClickSignIn}
                >
                    Sign in
                </button>
            </Link>

            <Link to={'/sign/up'}>
                <button
                    className={`sign ${activeBtn === 'up' ? 'active' : ''}`}
                    onClick={handleClickSignUp}
                >
                    Sign up
                </button>
            </Link>
        </div>
    );
};
