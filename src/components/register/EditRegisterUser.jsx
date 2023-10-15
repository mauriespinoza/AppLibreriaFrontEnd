import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Form, Alert } from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";


export const EditRegisterUser = () => {
   const  {user}   = useAuth();
   const navigate= useNavigate();


  const onSubmitData = (e) => {
    e.preventDefault();

  };
  useEffect(()=> {
    if(user===null){
      navigate("/login")
    }
  },[user]);
  
  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-5 rounded-3" style={{ maxWidth: "auto" }}>
            <Form onSubmit = {(e) => {onSubmitData(e)}}>
              <MDBCardBody className="px-5">
                <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Información de la cuenta
                </h3>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Rut"
                  id="rut"
                  type="text"
                  disabled="true"
                  value={user ? user.userdata.rut : ''}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Nombre"
                  id="nombre"
                  type="text"
                  value={user ? user.userdata.nombre : ''}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Apellido"
                  id="apellido"
                  type="text"
                  value={user ? user.userdata.apellido : ''}
                />

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Mail"
                      id="email"
                      type="text"
                      required={true}
                      value={user ? user.userdata.correo : ''}
                    />
                  </MDBCol>

                  <MDBCol md="6" className="mb-4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Edad"
                      id="edad"
                      type="text"
                      value={user ? user.userdata.edad : ''}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                  />
                </MDBRow>
                <div className="text-center">
                  <MDBBtn type='submit' color="primary" size="lg">
                    Guardar Cambios
                  </MDBBtn>
                </div>
              </MDBCardBody>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
