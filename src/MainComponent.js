import React, { useState, useEffect} from 'react';
import "./App.css";
import {
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { useTranslation } from 'react-i18next';


  export default function MainComponent(){
    const { t } = useTranslation();

    return(
        <MDBContainer fluid>
            {t('test')}
        </MDBContainer>
    );
  }