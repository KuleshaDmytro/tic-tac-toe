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
import { PageNotFound } from '../PageNotFound/PageNotFound'

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
            <Link to={'/about-us'} >
              <img src={logo} alt='logo' className='logo'></img>
            </Link>
          </div>
          <div className='nav'>
            <Link to={'/'} className='btn-nav' data-testid='Play_Game_main'>
              Play Game
            </Link>

            <Link to={'/about-us'} className='btn-nav' data-testid='About_us_main'>
              About us
            </Link>
          </div>
          
          <div className='login'>

            <Link to={'/sign/in'} className='btn-log' data-testid='Sign_in_main'>
              Sign in / Sign up
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
              <Link to={'/'} className='btn-nav burger_btn-nav'>
                Play Game
              </Link>
                
              <Link to={'/about-us'} className='btn-nav burger_btn-nav'>
                About us
              </Link>
                           
            </div>
            
            <div className='burger-nav-container'>

              <Link to={'/sign/in'} className='btn-log burger_btn-nav'>
                Sign in / Sign up
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
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>

  
  )
  }
