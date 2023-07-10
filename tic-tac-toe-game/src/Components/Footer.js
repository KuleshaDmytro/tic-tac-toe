import "./../style/footer.css"
import full_logo from './../img/log2.svg'
import inst from './../img/instagram.png'
import linkedin from './../img/linkedin.png'

const toLinkedin = () => window.open('https://www.linkedin.com/in/kuleshadmytro/');
const toInstagram = () => window.open('https://www.instagram.com/l1ke_a_sunset/');

export const Footer = () => {
    return (
      <footer className='footer'>
        <div className="info-card">
          <div className="logo-card">
            
            <label><img src={full_logo} alt='logo' className='full_logo'></img> </label>
          </div>
          <div className="social-networks">
              <div className="inst-card"><img src={inst} alt="Instagram" className="inst" onClick={toInstagram}></img></div>
              <div className="linkedin-card"><img src={linkedin} alt="linkedin" className="linkedin" onClick={toLinkedin}></img></div>
          </div>
        </div>
      </footer>
    )
  }