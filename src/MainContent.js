import React, { useState, useEffect, Fragment } from 'react';
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
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from 'mdb-react-ui-kit';
import Footer from './Footer';
import InfoComponent from './InfoComponent';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function MainContent() {
  const [showNav, setShowNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e);
    localStorage.setItem('language', e);
  };

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

  const handleNavigateToNewTab = () => {
    window.scrollTo(0, 0);
    window.open('/KizunaApp', '_blank');
  };


  return (
    <Fragment>
      <MDBNavbar id='mainNav' sticky expand='lg' style={{ backgroundColor: theme === 'dark' ? '#474463' : '#cfd0d7' }}>
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
            <img src={theme === 'dark' ? "/logo-white.png" : "/logo2.png"} height="50px" width="50px"></img>
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href='#about'>
                  {t('aboutText')}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#developers'>{t('developersText')}</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#footer'>{t('contactsText')}</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn style={{ backgroundColor: "transparent", outline: "none", borderColor: "transparent" }} className='py-2' color='none' size='sm' noRipple onClick={toggleTheme}>
                  <MDBIcon size='lg' icon={theme === 'light' ? 'moon' : 'sun'} fas></MDBIcon>
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle style={{ backgroundColor: "transparent", borderColor: 'transparent', outline: 'none', color: theme === 'light' ? '#474463' : '#cfd0d7' }} className='py-2' color='none' size='sm' noRipple>
                    <MDBIcon size='lg' className='px-2' icon='globe' fas></MDBIcon>
                    {t('language')}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu style={{ backgroundColor: theme === 'dark' ? '#474463' : '#cfd0d7', outline: "none", borderColor: theme === 'light' ? '#474463' : '#cfd0d7' }} className='py-2' color='none' size='sm'>
                    <MDBDropdownItem link onClick={() => changeLanguage('en')}>
                      English
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => changeLanguage('it')}>
                      Italiano
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem className='ml-auto'>
                <MDBNavbarLink style={{
                  color: theme === 'dark' ? '#474463' : '#cfd0d7',
                  backgroundColor: theme === 'light' ? '#474463' : '#cfd0d7',
                  outline: "none",
                  borderColor: "transparent",
                  borderRadius: '15px'
                }} className='py-2 appButton' color='none' size='sm' onClick={handleNavigateToNewTab}>
                  {t('appButtonText')}
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <InfoComponent theme={theme} t={t}></InfoComponent>
      <Footer theme={theme}></Footer>
    </Fragment>
  );
}
