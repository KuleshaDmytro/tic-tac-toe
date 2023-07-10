import './../style/header.css'
import logo from './../img/twoUAH.svg'
import { Sign } from './Sign/Sign'
import { PlayingField } from './PlayingField'
import { AboutUs } from './AboutUs/AboutUs'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


export const Header = () => {
  return (

    <Router>
      <header className='header'>
     
        <div className='header_card'>
          <div className='test'>
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

            <Link to={'/sign'}>
              <button className='btn-log'>Sign in / Sign up</button>
            </Link>

          </div>
        </div>
      
      </header>
      <Routes>
          <Route exact path="/" element={<PlayingField/>}/>
          <Route exact path="/about-us" element={<AboutUs/>}/>
          <Route exact path="/sign" element={<Sign/>}/>
      </Routes>
    </Router>

  
  )
  }
