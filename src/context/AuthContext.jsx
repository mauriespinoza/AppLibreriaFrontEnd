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

  const signin = async (user) => {
    try {
      const response = await axiosClient.post("/login",user);
      console.log(`signin.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setToken(response.data);
        setErrors([response.data.message]);
       // localStorage.setItem("Token",response.data);
      } else {
        setToken('');
        //localStorage.setItem("Token",'');
      }
      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      console.log(error)
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    localStorage.setItem("Token",JSON.stringify(token) ?? '' )
  }, [token])
  
  const singup = async (user) => {
    try{
      console.log(`singup: ${user}`)
       const response = await axiosClient.post("/users", user);
       console.log(`singup.response.token: ${JSON.stringify(response.data)}`)
      if(response.data){
        setUser(response.data);
        setErrors([response.data.message]);
      } else {
        setUser('');
        setErrors([response.data.message]);
      }
    } catch(error){
      console.log("Exception: " + error.response.data.message)
      setUser('');
      setErrors([error.response.data.message]);
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
      }}>
        {children}
      </AuthContext.Provider>
  );
};
