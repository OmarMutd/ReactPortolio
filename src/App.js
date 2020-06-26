import React from 'react';
import './App.css';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

function App() {
  return (
    <div className="App">
      <h1 className='App-Header'> Hi, I'm Omar.</h1>
      <p className='intro-to-me'> A Full stack React software engineer living in Texas,USA<span role='img' aria-label="USA-flag"> 🇺🇸</span>.</p>
      <p className='about'>Coding is a lot of fun espically when it comes to showing your creative side using tools like Reactjs or Javascript!
      My Skills include: HTML, JS, CSS, React, Express, and postgreSQL. I aslo desire to work on a team as pair programming is very fun.
I also really enjoy pets and hiking as hobbies.</p>
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
          "mailto:omarmuhomar@hotmail.com?subject=current-issue&amp;body=send%20current-issue"
          target="_blank"
          rel="noopener noreferrer">
          Email</a></p>
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
    </div>
  );
}

export default App;

