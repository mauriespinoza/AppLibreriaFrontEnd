import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PayPalButton } from "../paypal/PaypalButton";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./cartItems.css";
import { ModalDialog } from "../modals/ModalDialog";

export const CartItems = () => {

  const { cart, removeFromCart, addToCart } = useProduct();

  const { token, paypalStatus, mailGuess } = useAuth();

  let cartTotal = cart.reduce(
    (acumulador, actual) => acumulador + actual.total,
    0
  );

  let cartCantidad = cart.reduce(
    (acumulador, actual) => acumulador + actual.cantidad,
    0
  );

  function FormatCLP(price) {
    return new Intl.NumberFormat().format(price);
  }

  useEffect(() => {
    if (mailGuess) {
      console.log("mailGuess: " + mailGuess);
    } else {
      console.log("nomailGuess: " + mailGuess);
    }
  }, [""]);
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
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
                            Carro de Compras
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {"Items: " + cartCantidad}
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />
                        {cart.map((product) => (
                          <MDBRow
                            key={product._id}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={product.imagen}
                                fluid
                                className="rounded-3"
                                alt={product.nombre}
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {product.nombre}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {product.descripcion}
                              </MDBTypography>
                            </MDBCol>

                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <ButtonGroup>
                                <Button aria-label="reduce">
                                  <RemoveIcon
                                    fontSize="small"
                                    onClick={() => {
                                      removeFromCart(product);
                                    }}
                                  />
                                </Button>
                                <Button>{product.cantidad}</Button>
                                <Button
                                  aria-label="increase"
                                  onClick={() => {
                                    addToCart(product);
                                  }}
                                >
                                  <AddIcon fontSize="small" />
                                </Button>
                              </ButtonGroup>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                ${product.cantidad * product.valor}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a href="#!" className="text-muted">
                                <MDBIcon fas icon="times" />
                              </a>
                            </MDBCol>
                            <hr className="my-4" />
                          </MDBRow>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <Link to="/" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Volver a Comprar
                            </Link>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Resumen
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            {"Items: " + cartCantidad}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ${FormatCLP(cartTotal)}
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total a Pagar
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ${FormatCLP(cartTotal)}
                          </MDBTypography>
                        </div>
                        {paypalStatus.map((paypal, i) => (
                          <Alert
                            sx={{ mb: 1 }}
                            variant={paypal.status}
                            key={i}
                            severity={""}
                          >
                            {paypal.messagge}
                          </Alert>
                        ))}
                        {token ? (
                          <PayPalButton
                            invoice={"Productos"}
                            totalValue={cartTotal}
                          />
                        ) : !mailGuess ? (
                          <ModalDialog />
                        ) : (
                          <PayPalButton
                            invoice={"Productos"}
                            totalValue={cartTotal}
                          />
                        )}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};
