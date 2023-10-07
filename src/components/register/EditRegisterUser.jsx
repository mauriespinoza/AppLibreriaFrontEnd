import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
const useStyles = styled((theme) => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formField: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  }));
export const EditRegisterUser = () => {
        const classes = useStyles();
      
        const [name, setName] = useState('lucas');
        const [email, setEmail] = useState('lucas@hhh.cl');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const updatedUser = { ...name, email };
          //updateUser(updatedUser);
        };
  return (
    <>
    
    
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <TextField
        className={classes.formField}
        label="Nombre"
        variant="outlined"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className={classes.formField}
        label="Correo electrónico"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Guardar cambios
      </Button>
    </form>
    </>
  )}

