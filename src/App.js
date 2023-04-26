import React, { useState, useEffect, Fragment} from 'react';
import "./App.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Footer from './Footer';

function App() {
  const [showNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
      }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Fragment>
      <MDBNavbar expand='lg' light bgColor={theme == 'light' ? 'light' : 'dark'}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src={theme == 'dark' ? "/logo-white.png" : "/logo2.png"} height="50px" width="50px"></img>
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </MDBNavbar>
      <Footer></Footer>
    </Fragment>
    
  );
}

export default App;