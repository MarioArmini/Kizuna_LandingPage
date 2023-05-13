import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./App.css";

export default function Footer(props) {
  return (
    <MDBFooter id='footer' className='text-center' style={{ backgroundColor: props.theme === 'dark' ? '#474463' : '#cfd0d7', color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}>
      <MDBContainer className='pt-4 mt-5'>
        <section>
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
        <div className='text-center p-3' style={{ color: props.theme === 'light' ? '#474463' : '#cfd0d7' }}>
          Copyright © 2023 <b>Kizuna</b> All rights reserved.
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}