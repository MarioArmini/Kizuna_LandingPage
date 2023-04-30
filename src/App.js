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
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Footer from './Footer';

function App() {
  const [showNav, setShowNav] = useState(false);
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
      <MDBNavbar expand='lg'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarTogglerExternalContent'
            aria-controls='navbarTogglerExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas></MDBIcon>
          </MDBNavbarToggler>
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
              <MDBNavbarItem>
                <MDBBtn color='link' size='sm' floating noRipple onClick={toggleTheme}>
                  <MDBIcon size='lg' icon={theme == 'light' ? 'moon' : 'sun'} fas></MDBIcon>
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>       
      </MDBNavbar>
      <Footer></Footer>
    </Fragment>
    
  );
}

export default App;