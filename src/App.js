import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App">      
      <h1>Jane Nath</h1>
      <div className="description">
        <p>full-stack software developer</p>
        <p>former nurse midwife</p>
      </div>
      <div className="socialLinks">
        <a className="email" href="mailto:jane.e.nath@gmail.com"><FontAwesomeIcon icon={faEnvelope} href="mailto:jane.e.nath@gmail.com"/></a>
        <a className="linkedin" href="https://www.linkedin.com/in/janenath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a className="github" href="https://www.github.com/janenath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
        <a className="medium" href="https://medium.com/@jane.e.nath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium}/></a>
      </div>
    </div>
  );
}

export default App;
