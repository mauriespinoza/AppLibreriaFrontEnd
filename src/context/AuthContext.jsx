import { createContext, useState, useEffect } from "react";
import { axiosClient } from "../config/api";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  
  const [token, setToken]= useState(localStorage.getItem("Token") ? JSON.parse(localStorage.getItem("Token")) : '');
  const [user, setUser] = useState(localStorage.getItem("LSUserData") ? JSON.parse(localStorage.getItem("LSUserData")) : '' );
  const [stateTrn, setStateTrn] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [paypalStatus, setPaypalStatus]= useState([]);
  const [mailGuess, setMailGuess] = useState('');
  const [idPaypal,setIdPaypal]=useState('');

  const signin = async (user) => {
    try {
      const response = await axiosClient.post("/login",user);
      console.log(`signin.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setToken(response.data);
        //setErrors([response.data.message]);
        setUser(response.data.userdata);
        setIsAuthenticated(true);
        //setUser(response.data);
        return true;
       // localStorage.setItem("Token",response.data);
      } else {
        setToken('');
        return false;
        //localStorage.setItem("Token",'');
      }
      
    } catch (error) {
      console.log("sign.exception: " + error)
      setErrors([error.response.data.message]);
      setUser('');
      return false;
    }
  };

  const updateUser = async (user) => {
    try {
      console.log("updateUser.token", token)
      const response = await axiosClient.put(`/users/${user.rut}`,user,{
        headers:{
          "Authorization" : token.value,
          "Content-Type": "application/json"
        },
      });
      console.log(`updateUser.response: ${JSON.stringify(response.data)}`)
      if(response.data){
        console.log("updateUser",response.data)
        setStateTrn(true)
        return true;
      } else {
        setStateTrn(false)
        return false;
      }
      
    } catch (error) {
      setStateTrn(false)
      console.log("sign.exception: " + error)
      setErrors([error.response.data.message]);
      return false;
    }
  }

  const clearCart =() =>{
    localStorage.setItem("cartItems", []);
    setIdPaypal(null);
  }
  useEffect(() => {
    localStorage.setItem("Token",JSON.stringify(token) ?? '' )
  }, [token])
  
  useEffect(() => {

    if (errors.length > 0) {

      const timer = setTimeout(() => {

        setErrors([]);

      }, 5000);

      return () => clearTimeout(timer);

    }

  }, [errors]);

  useEffect(() => {

    if(stateTrn !== null){

    
    if (stateTrn) {

      const timer = setTimeout(() => {

        setStateTrn(null);

      }, 5000);

      return () => clearTimeout(timer);

    }
  }
  }, [stateTrn]);

  useEffect(() => {

    if(idPaypal !== null){

    
    if (idPaypal) {

      const timer = setTimeout(() => {

        //setIdPaypal(null);
        // clearCart();
        // navigate("/");

      }, 7000);

      return () => clearTimeout(timer);

    }
  }
  }, [idPaypal]);

  const singup = async (user) => {
    try{
      console.log(`singup: ${user}`)
       const response = await axiosClient.post("/users", user);
       console.log(`singup.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setUser(response.data);
        setToken(response.data.token);
        setIsAuthenticated(true);
        return true;
      } else {
        setUser(null);
        setToken('');
        setIsAuthenticated(false);
        return false;
      }
    } catch(error){
      console.log("Exception: " + error.response.data.message)
      setUser(null);
      setErrors([error.response.data.message]);
      setToken('');
      setIsAuthenticated(false);
      return false;
    }
  }
  const logout = () =>{
    console.log(`logout()`);
    localStorage.setItem("Token", '');
    setIsAuthenticated(false);
    setToken('');
    setUser('');
    navigate("/login");
  }
  return (
    <AuthContext.Provider 
      value={{
        signin,
        isAuthenticated,
        setErrors,
        setToken,
        token,
        setIsAuthenticated,
        singup,
        user,
        setUser,
        logout,
        errors,
        setPaypalStatus,
        paypalStatus,
        mailGuess,
        setMailGuess,
        updateUser,
        stateTrn,
        setIdPaypal,
        idPaypal,
      }}>
        {children}
      </AuthContext.Provider>
  );
};
