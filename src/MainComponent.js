import React, { Fragment } from 'react';
import "./App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function MainComponent(props) {

  var cardBG2String = 'url(../assets/card_BG2.png)';
  var cardBGLight = 'url(../assets/card_BGLight.png)';
  var cardBGDark = 'url(../assets/card_BGDark.png)';

  var WPIT = '../assets/Kizuna_WP.pdf';
  var WPEN = '../assets/Kizuna_WP_EN.pdf';

  var mediumArticleUrl = 'https://medium.com/@arminimario7/blockchain-in-healthcare-a-future-of-transparency-and-data-security-14da5424f90e';

  var language = localStorage.getItem('language');

  return (
    <Fragment>
      <MDBContainer className='px-1'>
        <MDBRow className='mb-5 mt-5'>
          <MDBCol
            md="6"
            className="text-center text-md-left mt-xl-5 mb-5"
            style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}
          >
            <h1 className="h1-responsive font-weight-bold mt-sm-5" style={{ fontSize: '50px' }}>
              {props.t('title')}
            </h1>
            <hr className="hr-light" />
            <h4 className="mb-4">
              {props.t('subTitle')}
            </h4>
          </MDBCol>
        </MDBRow>
        <MDBRow id='about'>
          <MDBCol
            md="6"
            className='text-center text-md-center mt-xl-5 mb-5'
            style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}
          >
            <MDBCard
              style={{ boxShadow: 'none', backgroundColor: props.theme === 'light' ? "rgba(207, 208, 215, 0.7)" : "rgba(71, 68, 99, 0.7)", borderRadius: "15px" }}
              className='mt-5'
            >
              <MDBCardBody className='mt-2'>
                <MDBCardTitle className='text-md-left' style={{ fontSize: '30px' }}>
                  {props.t('explanationCardTitle')}
                </MDBCardTitle>
                <MDBCardText className='mt-3 text-md-left' style={{ opacity: '65%', color: props.theme === 'light' ? '#474463' : '#cfd0d7', fontSize: '23px' }}>
                  {props.t('explanationCardSubTitle')}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol
            md="6"
            className='text-center text-md-center mt-xl-5 mb-5'
            style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}
          >
            <MDBCard
              style={{
                backgroundColor: 'transparent',
                color: props.theme === 'dark' ? '#474463' : '#cfd0d7', borderRadius: "15px",
                backgroundImage: cardBG2String
              }}
              className='mt-5'
            >
              <MDBCardBody
                className='mt-5'>
                <MDBCardTitle style={{ color: 'white' }} className='mt-5 text-md-left'>
                  {props.t('whitePaperCardTitle')}
                </MDBCardTitle>
                <a href={WPEN}
                  target='_blank'
                >
                  <MDBBtn className='d-flex justify-content-start'
                    noRipple
                    style={{ borderRadius: '15px' }}
                  >
                    {props.t('whitePaperCardButtonText')}
                    <MDBIcon className='ml-2 mt-1' size='sm' icon='arrow-right'>
                    </MDBIcon>
                  </MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow id='developers' className='mt-5'>
          <MDBCol
            md="8"
            className='text-center text-md-center mt-xl-5 mb-5'
            style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}
          >
            <MDBCard
              style={{
                backgroundColor: props.theme === 'light' ? '#474463' : '#cfd0d7',
                color: props.theme === 'dark' ? '#474463' : '#cfd0d7', borderRadius: "15px",
                backgroundImage: props.theme === 'dark' ? cardBGLight : cardBGDark
              }}
              className='mt-5'
            >
              <MDBCardBody className='mt-5'>
                <MDBCardTitle className='mt-5 text-md-left'>
                  {props.t('mediumCardTitle')}
                </MDBCardTitle>
                <MDBCardText style={{ color: props.theme === 'dark' ? '#474463' : '#cfd0d7' }} className='mt-3 text-md-left'>
                  {props.t('mediumCardSubTitle')}
                </MDBCardText>
                <a href={mediumArticleUrl}
                  target='_blank'>
                  <MDBBtn className='d-flex justify-content-start'
                    noRipple
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px' }}

                  >
                    {props.t('mediumCardButtonText')}
                    <MDBIcon className='ml-2 mt-1' size='sm' icon='arrow-right'>
                    </MDBIcon>
                  </MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol
            md="4"
            className='text-center text-md-center mt-xl-5 mb-5'
          >
            <MDBCard
              style={{ backgroundColor: props.theme === 'light' ? "rgba(207, 208, 215, 1)" : "rgba(71, 68, 99, 1)", borderRadius: "15px" }}
              className='mt-5'
            >
              <MDBCardBody className='mt-2'>
                <MDBCardTitle className='mt-1 text-md-left'>
                  {props.t('githubCardTitle')}
                </MDBCardTitle>
                <MDBCardText style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }} className='mt-3 text-md-left'>
                  {props.t('githubCardSubTitle')}
                </MDBCardText>
                <a href=''
                  target='_blank'>
                  <MDBBtn className='d-flex justify-content-start mt-5'
                    noRipple
                    style={{ backgroundColor: 'transparent', borderRadius: '15px' }}
                  >
                    {props.t('githubCardButtonText')}
                    <MDBIcon className='ml-2 mt-1' size='sm' icon='arrow-right'>
                    </MDBIcon>
                  </MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
}