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
import { useTranslation } from 'react-i18next';

export default function MainComponent(props) {

    return (
        <Fragment>
            <MDBContainer className='px-1'>
              <MDBRow className='mb-5 mt-5'>
                <MDBCol
                  md="6"
                  className="text-center text-md-left mt-xl-5 mb-5"
                  style={{color: props.theme === 'light' ? '#474463' : '#cfd0d7'}}
                >
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      {props.t('title')}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      {props.t('subTitle')}
                    </h6>
                </MDBCol>
              </MDBRow>
              <MDBRow id='about'>
                <MDBCol
                  md = "6"
                  className='text-center text-md-center mt-xl-5 mb-5'
                >
                </MDBCol>
                <MDBCol
                  md = "6"
                  className='text-center text-md-center mt-xl-5 mb-5'
                  style={{color: props.theme === 'light' ? '#474463' : '#cfd0d7'}}
                >
                    <MDBCard
                      style={{backgroundColor: props.theme === 'light' ? '#474463' : '#cfd0d7',
                              color: props.theme === 'dark' ? '#474463' : '#cfd0d7', borderRadius: "15px",
                              backgroundImage: props.theme === 'dark' ? 'url(../assets/card_BGLight.png)' : 'url(../assets/card_BGDark.png)'}}
                      className='mt-5'
                    >
                      <MDBCardBody className='mt-5'>
                        <MDBCardTitle className='mt-5 text-md-left'>
                          {props.t('aboutCardTitle')}
                        </MDBCardTitle>
                        <MDBCardText className='mt-3 text-md-left'>
                          {props.t('aboutCardSubTitle')}
                        </MDBCardText>
                        <MDBBtn className='d-flex justify-content-start'
                                noRipple
                                style={{ borderRadius: '15px'}}
                        >
                          {props.t('aboutCardButtonText')}
                          <MDBIcon className='ml-2 mt-1' size='sm' icon='arrow-right'>
                          </MDBIcon>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                </MDBCol>
              </MDBRow>
              <MDBRow id='developers' className='mt-5'>
                <MDBCol
                  md = "6"
                  className='text-center text-md-center mt-xl-5 mb-5'
                  style={{color: props.theme === 'light' ? '#474463' : '#cfd0d7'}}
                >
                    <MDBCard
                      style={{backgroundColor: props.theme === 'light' ? '#474463' : '#cfd0d7',
                              color: props.theme === 'dark' ? '#474463' : '#cfd0d7', borderRadius: "15px",
                              backgroundImage: props.theme === 'dark' ? 'url(../assets/card_BGLight.png)' : 'url(../assets/card_BGDark.png)'}}
                      className='mt-5'
                    >
                      <MDBCardBody className='mt-5'>
                        <MDBCardTitle className='mt-5 text-md-left'>
                          {props.t('developersCardTitle')}
                        </MDBCardTitle>
                        <MDBCardText className='mt-3 text-md-left'>
                          {props.t('developersCardSubTitle')}
                        </MDBCardText>
                        <MDBBtn className='d-flex justify-content-start'
                                noRipple
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px'}}
                        >
                          {props.t('developersCardButtonText')}
                          <MDBIcon className='ml-2 mt-1' size='sm' icon='arrow-right'>
                          </MDBIcon>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol
                  md = "6"
                  className='text-center text-md-center mt-xl-5 mb-5'
                >
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        </Fragment>
    );
}