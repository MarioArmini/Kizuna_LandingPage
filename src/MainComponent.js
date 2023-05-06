import React, { Fragment } from 'react';
import "./App.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';

export default function MainComponent(props) {

    return (
        <Fragment>
            <MDBContainer>
              <MDBRow>
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
            </MDBContainer>
        </Fragment>
    );
}