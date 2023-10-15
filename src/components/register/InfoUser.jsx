import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBTypography,
  MDBInput,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const InfoUser = () => {
  const { user, stateTrn , updateUser} = useAuth();

  const [variantlbl, setVariantlbl] = useState(''); 

  const [message, setMessage] = useState('')

  const [data, setData] = useState({
    nombre: user.userdata.nombre ? user.userdata.nombre : "",
    apellido: user.userdata.apellido ? user.userdata.apellido : "",
    correo: user.userdata.correo ? user.userdata.correo : "",
    edad: user.userdata.edad ? user.userdata.edad : "",
  });

  console.log("user", data.nombre);

  const onSubmitData = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log("data.pass: " + data.get("password"));

    const userData = {
      nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      rut: data.get("rut"),
      edad: data.get("edad"),
      correo: data.get("email"),
      // password: data.get("password"),
    };
    console.log("requestRegister: " + JSON.stringify(userData));
    const userResponse = updateUser(userData);
    console.log(`userResponse: ${JSON.stringify(userResponse)}`);
  };
  const onChangeInput = (event) => {
    console.log("event", event.target.name);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (stateTrn === true) {
      setVariantlbl('success')
      setMessage('Datos actualizados correctamente')
    } else if(stateTrn === false){
      setVariantlbl('danger')
      setMessage('Tuvimos un inconveniente para actualizar tus datos')
    } else {
      setVariantlbl('')
      setMessage('')
    }
  }, [stateTrn]);


  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <Form
                onSubmit={(e) => {
                  onSubmitData(e);
                }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Información de la cuenta
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {/* {"Items: "} */}
                          </MDBTypography>
                        </div>
                        <hr className="my-5" />
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="4" xl="12">
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Rut"
                              name="rut"
                              type="text"
                              // disabled="true"
                              value={user ? user.userdata.rut : ""}
                            />
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Nombre"
                              id="nombre"
                              name="nombre"
                              type="text"
                              onChange={(e) => {
                                onChangeInput(e);
                              }}
                              value={data.nombre}
                            />

                            <MDBInput
                              wrapperClass="mb-4"
                              label="Apellido"
                              id="apellido"
                              name="apellido"
                              type="text"
                              value={data.apellido}
                            />
                            <MDBRow>
                              <MDBCol md="8">
                                <MDBInput
                                  wrapperClass="mb-4"
                                  label="Mail"
                                  id="email"
                                  name="email"
                                  type="text"
                                  required={true}
                                  value={data.correo}
                                />
                              </MDBCol>

                              <MDBCol md="4" className="mb-4">
                                <MDBInput
                                  wrapperClass="mb-4"
                                  label="Edad"
                                  id="edad"
                                  name="edad"
                                  type="text"
                                  value={data.edad}
                                />
                              </MDBCol>
                            </MDBRow>
                            <div className="text-center">
                              <MDBBtn type="submit" color="primary" size="lg">
                                Guardar Cambios
                              </MDBBtn>
                              <div>
                              {stateTrn ? 
                                    <Alert
                                      sx={{ mb: 1 }}
                                      variant={variantlbl}
                                      severity={""}
                                    >
                                      {message}
                                    </Alert>
                                    : null
                                }
                                </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Candelabra
                        </MDBTypography>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text">
                            {
                              "Aca puedes editar tu información, editando la casilla correspondiente, luego dar clic al Boton Guardar Cambios"
                            }
                          </MDBTypography>
                          <MDBTypography tag="h5"></MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
