import React, { Component } from 'react';
import './App.css';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Footer from './Footer';
import BurgerMenu from './BurgerMenu/burgermenu';
import SideMenu from './BurgerMenu/sidemenu';



class App extends Component {
  state = {
    sideMenu: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenu: !prevState.sideMenu }
    });
  };

  // drawerToggleClickHandler = () => {
  //   this.setState({ sideMenu: true })
  // };



  render() {

    // if (this.state.sideDrawerOpen)
    return (
      <div className="App" style={{ height: '100%' }}>
        <BurgerMenu drawerClickHandler={this.drawerToggleClickHandler} />
        <SideMenu show={this.state.sideMenu} />

        <h1 className='App-Header'> Hi, I'm Omar.</h1>
        <p className='intro-to-me'> A Full stack React software engineer living in Texas,USA<span role='img' aria-label="USA-flag"> 🇺🇸</span>.</p>
        <p className='intro-to-me two'>Coding is a lot of fun espically when it comes to showing your creative side using tools like Reactjs or Javascript!</p>
        <p className='intro-to-me two'>I also desire to work on a team as pair programming is very fun. I also really enjoy pets and hiking as hobbies.</p>
        <ul className='skills-list'>
          <h5>My Skills include:</h5>
          <li>JS</li>
          <li>CSS</li>
          <li>React</li>
          <li>Express & Node</li>
          <li>PostgreSQL</li>
        </ul>
        <h3 className='Projects-header'>Projects</h3>
        <div className="item-card">
          <div className='item-image'>
            <Project1 />
            <Project2 />
            <Project3 />
          </div>
        </div>
        <h3 className='Projects-header'>Contact</h3>
        <div className='contact-information'>
          <p><a href=
            "mailto:omarmuhomar@hotmail.com?subject=Hey Omar!&amp;body=send%20..."
            target="_blank"
            rel="noopener noreferrer">
            Email me at: omarmuhomar@hotmail.com</a></p>
          <p><a href=
            "https://www.linkedin.com/in/omar-muhanna-profile/"
            target="_blank"
            rel="noopener noreferrer">
            Linkedin</a></p>
          <p><a href=
            "https://github.com/OmarMutd"
            target="_blank"
            rel="noopener noreferrer">
            Github</a></p>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;

