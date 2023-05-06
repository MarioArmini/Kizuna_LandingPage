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

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
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
    
          <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-dark'>
              Kizuna
            </a>
          </div>
        </MDBFooter>
      );
}