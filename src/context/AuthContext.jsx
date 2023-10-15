import { createContext, useState, useEffect } from "react";
import { axiosClient } from "../config/api";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  
  const [token, setToken]= useState(localStorage.getItem("Token") ? JSON.parse(localStorage.getItem("Token")) : '');
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [paypalStatus, setPaypalStatus]= useState([]);
  const [mailGuess, setMailGuess] = useState('');

  const signin = async (user) => {
    try {
      const response = await axiosClient.post("/login",user);
      console.log(`signin.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setToken(response.data);
        //setErrors([response.data.message]);
        setUser(response.data.userdata);
        setIsAuthenticated(true);
        setUser(response.data);
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
      return false;
    }
  };

  const updateUser = async () => {
    try {
      const response = await axiosClient.post("/login",user);
      console.log(`signin.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setToken(response.data);
        //setErrors([response.data.message]);
        setUser(response.data.userdata);
        setIsAuthenticated(true);
        setUser(response.data);
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
      return false;
    }
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

  const singup = async (user) => {
    try{
      console.log(`singup: ${user}`)
       const response = await axiosClient.post("/users", user);
       console.log(`singup.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setUser(response.data);
        setToken(response.data.token);
        //setErrors([response.data.message]);
        setIsAuthenticated(true);
        return true;
      } else {
        setUser(null);
        setToken('');
        //setErrors([response.data.message]);
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
      }}>
        {children}
      </AuthContext.Provider>
  );
};
