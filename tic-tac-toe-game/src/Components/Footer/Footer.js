import "./../../style/Footer/footer.css"
import full_logo from './../../img/log2.svg'
import inst from './../../img/instagram.png'
import linkedin from './../../img/linkedin.png'
import github from './../../img/github-logo.png'

const toLinkedin = () => window.open('https://www.linkedin.com/in/kuleshadmytro/');
const toInstagram = () => window.open('https://www.instagram.com/l1ke_a_sunset/');
const toGithub = () => window.open('https://github.com/KuleshaDmytro');

export const Footer = () => {
    return (
      <footer className='footer col-12'>
        <div className="info-card">
          <div className="logo-card">
            
            <label><img src={full_logo} alt='logo' className='full_logo'></img> </label>
          </div>
          <div className="social-networks">
              <div className="github-card"><img src={github} alt="GitHub" className="github" onClick={toGithub}></img></div>
              <div className="linkedin-card"><img src={linkedin} alt="Linkedin" className="linkedin" onClick={toLinkedin}></img></div>
              <div className="inst-card"><img src={inst} alt="Instagram" className="inst" onClick={toInstagram} data-testid='instagram'></img></div>
          </div>
        </div>
      </footer>
    )
  }