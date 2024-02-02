import { useState } from 'react'
import './App.css'
import './app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar'
import './components/Header/Navbar.scss'
import Footer from './components/Footer/Footer'
import './components/Footer/Footer.scss'
import Home from './views/Home/Home'
import './views/Home/Home.scss'
import CV from './views/CV/CV'
import './views/CV/CV.scss'
import Projekt from './views/Projekt/Projekt'
import './views/Projekt/Projekt.scss'
import Kontakt from'./views/Kontakt/Kontakt'
import './views/Kontakt/Kontakt.scss'

function App() {

  return (
    <>
	<Router>
	       <Navbar /> {/* Navbar remains constant across all routes */}
       	<Routes>
          <Route path="/" element= { <Home/>} />
          <Route path="/cv" element= {<CV/>} />
          <Route path="/projekt" element= {<Projekt />} />
          <Route path="/kontakt" element= {<Kontakt/>} />
       	</Routes>
		<Footer />
</Router>
	</>
  );
}

export default App
