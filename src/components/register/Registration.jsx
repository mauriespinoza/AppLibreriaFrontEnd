
import { Col, Button, Row, Container, Card, Form , Alert } from 'react-bootstrap';
import { 
  MDBBtn, 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBInput, 
  MDBIcon, 
  MDBCheckbox 
} 
from 'mdb-react-ui-kit';

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import './registration.css';
import { useEffect, useState } from 'react';


export const Registration = () => {
  
  const initialFormData  = {
    nombre: "",
    apellido: "",
    rut: "",
    edad: "",
    correo: "",
    password: "",
  };

  const { singup, user ,errors, token, setErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);

    const [variantlbl, setVariantlbl] = useState(''); 
    const [password2, setPassword2] = useState("");
    const [formState, setFormState] = useState(false)

    
    const setData = (e, dataElement) => {
      console.log(dataElement)
      setFormData({
          ...formData,
          [dataElement]: e.target.value
      })
  }


    const onSubmitData = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("data: " + data.get("password"))
        console.log("password1: " + initialFormData.password)
        if (data.get("password")!== password2) {
          console.log("password: " + data.get("password")  + " son distintas: " +  password2)
          setFormState(true);
          return;
        } else {
          setFormState(false);
        }

        const userData = {
          nombre : data.get("nombre"),
          apellido: data.get("apellido"),
          rut: data.get("rut"),
          edad: data.get("edad"),
          correo: data.get("email"),
          password: data.get("password"),
        };
        console.log("requestRegister: " + JSON.stringify(userData))
        const userResponse = singup(userData)
        console.log(`userResponse: ${JSON.stringify(userResponse)}`)
        //setVariantlbl("success");
        console.log("userResponse: " + userResponse)
        console.log("errors" + errors)
 
    }
    useEffect(() => {
      if(user){
        console.log(`response: Usuario creado`);

        setVariantlbl("success");
        //setErrors('');
        setTimeout(() => {
          navigate('/');
        }, 5000);

      } else {
        console.log(`response: ${errors}`)

        setVariantlbl("danger");

      }

    }, [token]);

    useEffect(() => {
      console.log("isAuthenticated:" + isAuthenticated)
      if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            
            <Form onSubmit = {(e) => {onSubmitData(e)}}>

              <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrate en Candelabra</p>
              {errors.length !== 0 ? errors.map((error, i) => (
                    <Alert
                      sx={{ mb: 1 }}
                      variant={variantlbl}
                      key={i}
                      severity={''}
                    >
                      {errors}
                    </Alert>
                  )) : null}

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                  label='Rut' 
                  id='rut' 
                  name="rut" 
                  onChange={(e) => setData(e, 'rut')} 
                  value= {formData.rut}
                  type='text' 
                  size='lg' 
                  className='w-100' 
                  required={true} 
                  placeholder="Sin puntos ni guion"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                  label='Nombre' 
                  id='nombre' 
                  name="nombre" 
                  onChange={(e) => setData(e, 'nombre')} 
                  value= {formData.nombre}
                  type='text'  
                  size='lg' 
                  className='w-100' 
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                label='Apellido' 
                id='apellido' 
                name="apellido" 
                onChange={(e) => setData(e, 'apellido')} 
                  value= {formData.apellido}
                type='text' 
                size='lg' 
                className='w-100' 
                required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                label='Edad' 
                id='edad' 
                name="edad"
                onChange={(e) => setData(e, 'edad')} 
                  value= {formData.edad}
                 type='text' 
                 size='lg' 
                 className='w-100'
                  required={true}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput 
                label='Mail' 
                id='email' 
                name="email" 
                onChange={(e) => setData(e, 'email')} 
                  value= {formData.email}
                type='email' 
                size='lg' 
                required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput 
                label='Clave' 
                id='password' 
                name="password" 
                onChange={(e) => setData(e, 'password')} 
                  value= {formData.password}
                type='password' 
                size='lg' 
                required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput 
                label='Repita Clave' 
                id='password2' 
                name="password2" 
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type='password' 
                size='lg' 
                required={true}
                />
              </div>
              {formState && (
                  <Alert variant="danger" severity="error">Las claves no coinciden</Alert>
               )}
              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}
	
              <MDBBtn  variant="primary" size='lg' type='submit'>Crear cuenta</MDBBtn>
              </Form>
              <div className="mt-3">
                       <p className="mb-0  text-center">
                         Ya tienes una cuenta?{' '}
                        <a href="/login" className="text-primary fw-bold">
                           Login
                         </a>
                      </p>
                    </div>
            </MDBCol>

            {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol> */}
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>



      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />

    </MDBContainer>
 
  )
}
