import {  Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { axiosClient } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './signin.css';

export const SignIn = () => {

  const { signin, isAuthenticated, token, errors, setErrors } = useAuth();
  const navigate = useNavigate();

  

  const [authenticated, setAuthenticated] = useState(false);
 // const [token, setToken] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const infoLogin = {
      correo: data.get("email"),
      password: data.get("password"),
    };
    signin(infoLogin);
    //Login(data.get("email"),data.get("password"));
  };
  // const Login = async(mail,pass)=> {
  //   const response = await axiosClient.post("/login",{
  //       correo: mail,
  //       password: pass,
  //   });
  //   if(response.data){
  //       console.log(response.data);
  //       setAuthenticated(true);
  //       setToken(response.data);
  //       navigate('/')
  //   }
    
  // }
  useEffect(() => {
    if (token !== "") {
    console.log(`useEffect.token: ${JSON.stringify(token)}`)
      navigate("/");
    } else {
      navigate("/login");
    }
    
  }, [token]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px",
        }}
      >
        <Typography sx={{ fontFamily:'Delicious Handrawn', fontSize:30}} className='title' component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {errors.length !== 0 ? 
        errors.map((error, i) => (
                    <Alert
                      sx={{ mb: 1 }}
                      variant="danger"
                      key={i}
                      severity={''}
                    >
                      {errors}
                    </Alert>
                  )) : null}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              {/* <Link href="/register" variant="body2">
                {"Registrate"}
              </Link> */}
              <Button onClick={()=>  (navigate("/register" ), setErrors([]))}  variant="body2">
                {"Registrate"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
