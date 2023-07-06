import { useState } from 'react';
import './App.css'
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Studies from './Components/Studies';
import Works from './Components/Works';
import NavBarItems from './Components/NavBarItems';
import Hero from './Components/Hero';

function App() {

const [sidebar, setSidebar] = useState('')

  const handleSidebar = () => {
    if (sidebar === '') {
      setSidebar('sidebarActive');
    } else {
      setSidebar('');
    }
  }

  return (
    <div className='app'>

      <header className='header'>
        <nav className="navbar">
            <img className="navbar_logo" src="./AS-logo.svg" alt="logo" />
            <div className='navIcons_desk'>
              <NavBarItems />
            </div>
            <button className='menu_icon' onClick={handleSidebar}>
              <i className='bx bx-menu-alt-right bx-burst-active' ></i>
            </button>
            <aside className={`sidebar ${sidebar}`}>
              <button className='sidebar_x' onClick={handleSidebar}> x </button>
              <NavBarItems handleSidebar={handleSidebar}/>
            </aside>
        </nav>
      </header>

      <main className='main'>
        <Hero />
        <AboutMe />
        <Studies />
        <Works />
        <Contact />
      </main>

      <footer className='footer'>
        <p className='footer_p'>Built by <span>Alan Solís</span></p>
        <ul className='footer_ul'>
          <li className='footer_item'>
            <a href=""><i className='bx bxl-github'></i></a>
          </li>
          <li className='footer_item'>
            <a href=""><i className='bx bxl-linkedin-square'></i></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App
