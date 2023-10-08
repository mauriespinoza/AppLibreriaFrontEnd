import { useState } from "react";
import { Form , Alert } from 'react-bootstrap';
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
} 
from 'mdb-react-ui-kit';

export const EditRegisterUser = () => {
       
      
        const [name, setName] = useState('lucas');
        const [email, setEmail] = useState('lucas@hhh.cl');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const updatedUser = { ...name, email };
          //updateUser(updatedUser);
        };
  return (
    <>
    
    
    <MDBContainer>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            
            <Form>

              <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Información de la cuenta</p>
              

              {/* <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Rut' id='rut' name="rut" type='text' size='lg' className='w-100' required={true} placeholder="Sin puntos ni guion"/>
              </div> */}

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

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repita Clave' id='password2' name="password2" type='password' size='lg' required={true}/>
              </div> */}

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}
	
              <MDBBtn  variant="primary" size='lg' type='submit'>Crear cuenta</MDBBtn>
              </Form>
            </MDBCol>

        
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </>
  )}

