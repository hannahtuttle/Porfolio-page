import React from 'react';
import {Route } from 'react-router-dom'

import SimpleMenu from './components/bottomMenu.js'
import ImageCard from './components/header.js'
import Skills from './components/skills'
import ProjectCard from './components/projectscard.js'
import About from './components/about.js'
import ContactForm from './components/contact.js'
import {data} from './projectData.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageCard />
      </header>
      <SimpleMenu />
      <About />
      <Skills />
      <h2 id="projects">Projects</h2>
      <section className="projects">
     {data.map(project => <ProjectCard key={project.title} project={project}/>) }
    </section>
    <ContactForm/>
    </div>
  );
}

export default App;
