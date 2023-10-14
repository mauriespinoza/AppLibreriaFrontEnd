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
   const  {user,token}   = useAuth();
   const navigate= useNavigate();
   //console.log("user", user.userdata)
   //console.log("token",token);
   //const {rut,nombre,apellido, edad,correo}= user.userdata;
  // const {rut, nombre, apellido, edad, correo} = user;
  
  //const [name, setName] = useState('rut');
  //const [email, setEmail] = useState("lucas@hhh.cl");

  const handleSubmit = (e) => {
    e.preventDefault();
    //const updatedUser = { ...name, email };
    //updateUser(updatedUser);
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
              {/* <MDBCardImage
                src="https://res.cloudinary.com/dxy1spfug/image/upload/c_thumb,g_face,w_129/v1694211813/utensilios-del-arte-pinturas_k6heev.webp"
                className="w-100 rounded-top"
                alt="Sample photo"
              /> */}
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

      {/* <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            
            <Form>

              <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Información de la cuenta</p>
              

        

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Nombre' id='nombre' name="nombre" type='text'  size='lg' className='w-100' required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Apellido' id='apellido' name="apellido" type='text' size='lg' className='w-100' required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Edad' id='edad' name="edad" type='text' size='lg' className='w-100' required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Mail' id='email' name="email" type='email' size='lg' required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Clave' id='password' name="password" type='password' size='lg' required={true}/>
              </div>

	
              <MDBBtn  variant="primary" size='lg' type='submit'>Crear cuenta</MDBBtn>
              </Form>
            </MDBCol>

        
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer> */}
    </>
  );
};
