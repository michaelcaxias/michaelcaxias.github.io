import React, { useContext } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { MyContext } from './context/MyProvider';

import { dark, light } from './styles/theme';

import GlobalStyle from './styles/global';
import About from './sections/About/index';
import Projects from './sections/Projects/index';
import Technologies from './sections/Technologies/index';
import Menu from './components/Menu';
import Footer from './sections/Footer/index';
import Modal from './components/Modal';

export default function App() {
  const { darkMode, isOpen } = useContext(MyContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={ darkMode ? dark : light }>
        <Menu />
        <GlobalStyle />
        <About />
        <Projects />
        <Technologies />
        <Footer />
        {isOpen && <Modal />}
      </ThemeProvider>
    </BrowserRouter>
  );
}
