import './../../style/Header/header.css'
import logo from './../../img/twoUAH.svg'
// import { Sign } from '../Sign/Sign'
import { PlayingField } from '../Game/PlayingField'
import { AboutUs } from '../AboutUs/AboutUs'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react'
import { SignIn } from '../Sign/SignIn'
import { SignOut } from '../Sign/SignOut'
import { ForgotPassword } from '../Sign/ForgotPassword'
import { PasswordRecovery } from '../Sign/PasswordRecovery'


export const Header = () => {

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    }else{
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);

  }

  
  return (

    <Router>
      <header className='header'>
     
        <div className='header_card'>
          <div className='logo_card'>
            <img src={logo} alt='logo' className='logo'></img>
          </div>
          <div className='nav'>
            <Link to={'/'}>
              <button className='btn-nav'>Play Game</button>
            </Link>

            <Link to={'/about-us'}>
              <button className='btn-nav'>About us</button>
            </Link>
          </div>
          
          <div className='login'>

            <Link to={'/sign/in'}>
              <button className='btn-log'>Sign in / Sign up</button>
            </Link>

          </div>

          <div className='burger-container'>
            <div className='burger-menu' onClick={updateMenu}>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
            </div>
          </div>

          <div className={menu_class}>
            <div className='burger-nav-container menu_padding_top'>
              <Link to={'/'}>
                <button className='btn-nav burger_btn-nav'>Play Game</button>
              </Link>
                
              <Link to={'/about-us'}>
                <button className='btn-nav burger_btn-nav'>About us</button>
              </Link>
                           
            </div>
            
            <div className='burger-nav-container'>

              <Link to={'/sign/in'}>
                <button className='btn-log burger_btn-nav'>Sign in / Sign up</button>
              </Link>
                
            </div>

          </div>

        </div>
      
        {/* <div className={menu_class}></div> */}

      </header>
      <Routes>
          <Route exact path="/" element={<PlayingField/>}/>
          <Route exact path="/about-us" element={<AboutUs/>}/>

          {/* Sign route */}
          <Route exact path="/sign/in" element={<SignIn/>}/>
          <Route exact path="/sign/forgot_password" element={<ForgotPassword/>}/>
          <Route exact path='/sign/forgot_password/password_recovery' element={<PasswordRecovery/>}/>
          <Route exact path="/sign/up" element={<SignOut/>}/>

      </Routes>
    </Router>

  
  )
  }
