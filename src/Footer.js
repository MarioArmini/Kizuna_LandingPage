import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./App.css";

export default function Footer(props) {
    return (
        <MDBFooter id='footer' className='text-center' style={{ backgroundColor: props.theme === 'dark' ? '#474463' : '#cfd0d7', color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}>
          <MDBContainer className='pt-4'>
            <section className='mb-4'>
              <MDBBtn
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
                noRipple
              >
                <MDBIcon fab className='fa-twitter' />
              </MDBBtn>
    
              <MDBBtn
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
                noRipple
              >
                <MDBIcon fab className='fa-linkedin' />
              </MDBBtn>
    
              <MDBBtn
                color='link'
                floating
                size="lg"
                className='text-dark m-1'
                href='#!'
                role='button'
                noRipple
              >
                <MDBIcon fab className='fa-github' />
              </MDBBtn>
            </section>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}>
            © 2023 Copyright:
            <b>
              Kizuna
            </b>
          </div>
        </MDBFooter>
      );
}