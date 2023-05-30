import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";




const Login = () => {

  const { dispatch } = useContext( AuthContext )

  const navigate = useNavigate()

  let resUser = {
    name: "pepito",
    email: "pepito@gmail",
    rol: "admin"
  }

  let resAccessToken = "daASGagsase123DASFGgasDSA123dASDasDAGFASG"

  const handleSubmit = ()=>{
    // const loginFetch = axios.post("http:dsadas/login", {email, password} )
    // loginFetch.then(res => res)


    dispatch( {type: "LOGIN", payload: {user: resUser, accessToken:resAccessToken }} )
    navigate("/")
  }

  return (
    <div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="password" />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
};

export default Login;
