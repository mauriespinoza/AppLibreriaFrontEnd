import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
export const ModalDialog = () => {
  const { setMailGuess } = useAuth();
  const [open, setOpen] = useState(false);
  const [mail, setMail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePay = () => {
    console.log("data: " + mail);
    setMailGuess(mail);
    setOpen(false);
  };

  const setData = (e, dataElement) => {
    console.log(dataElement);
    setMail(e.target.value);
  };

  return (
    <>
      <MDBCol lg="8">
        <MDBBtn
          variant="outlined"
          color="primary"
          block
          size="lg"
          onClick={handleClickOpen}
        >
          Pagar
        </MDBBtn>
      </MDBCol>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Candelabra</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para realizar el pago debes estar logueado o ingresar un email
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="mail"
            label="Email Address"
            type="email"
            onChange={(e) => setData(e, "mail")}
            fullWidth
            variant="standard"
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handlePay}>Continuar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
