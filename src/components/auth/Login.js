import React, {useState} from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/user";
import axios from "axios";


export default function Login(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({username: "", password: ""})
  const [errMsg, setErrMsg] = useState("")

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await dispatch(loginUser(login))
      navigate('/');
    }catch (err){
      if (!err?.response) {
        setErrMsg('¡Ups! Hubo un problema con tu solicitud.');
    } else if (err.response?.status === 400) {
        setErrMsg('Usuario o clave incorrecto/s.');
    } else if (err.response?.status === 401) {
        setErrMsg('Usuario o clave incorrecto/s.');
    } else {
        setErrMsg('¡Ups! Hubo un problema con tu solicitud.');
    }
    }
}

return(
    <>
    <Nav/>
    <div className="container d-flex justify-content-center align-items-center mb-5">
  <div className="row">
    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
      <div className="card shadow">
        <img
          src="https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
        <h3 className="auth-titles">Inicia Sesión</h3>
          <form
            onSubmit={handleSubmit}
            className="needs-validation"
            noValidate
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                required
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={login.username}
                onChange={handleChange}
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid username.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Password</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={login.password}
                onChange={handleChange}
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please enter a valid password.</div>
            </div>
            <div className="mb-3">
              <button className="btn btn-info btn-block">Submit</button>
            </div>
            <div className="error-msg">{errMsg}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    <Footer/>
</>
    )
}