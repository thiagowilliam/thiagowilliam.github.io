import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portifolio';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      {/* <Portfolio />
      <Blog /> */}
      <Contact />
    </>
  );
}

export default App;
