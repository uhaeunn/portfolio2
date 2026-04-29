import { useState } from 'react'
import Tabbtn from './components/Tabbtn';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ScrollToTop from './components/ScrollToTop';
import './App.css'
import IntroEditor from './components/IntroEditor';

function App() {

  const [tab, setTab] = useState('About Me');

  return (
    <main>
      <header>
        <div className="navbar">
          <div className="logo">Haeun's Porfolio</div>
          <nav className="nav-links">
            <Tabbtn name="About Me" className='AboutMe' onSelect={setTab} />
            <Tabbtn name="Projects" className='Projects' onSelect={setTab} />
          </nav>
        </div>
      </header>

      <section className="content-area">
        {tab === 'About Me' && (
          <>
          <section className = 'BigAboutMe'>
            <AboutMe />
            <IntroEditor />
          </section>
          </>)}
        {tab === 'Projects' && <Projects />}
      </section>

      <ScrollToTop />
    </main>
  );
}

export default App;
