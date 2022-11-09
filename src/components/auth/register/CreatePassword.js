import React, {useEffect, useState} from "react";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import passwordStrengthChecker from "../../../utils/passwordStrengthChecker"
import { useDispatch, useSelector} from "react-redux";
import * as api from "../../../api"



export default function CreatePassword(){
const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState({password: "", username:""})
  const [strengthValue, setStrengthValue] = useState({
    caps: false,
    length: false,
    special: false,
    numbers: false,
    small: false
  })
  const [display, setDisplay] = useState(false)

useEffect(()=>{
    setRegister({...register, username: state.user.user.username})
}, [state])

useEffect(()=>{
    setStrengthValue(passwordStrengthChecker(register.password))
}, [register])

useEffect(()=>{
    setDisplay(Object.values(strengthValue).every(
        value => value === true
      )) 
}, [strengthValue])

function handleChange(event) {
    const { name, value } = event.target;
    setRegister({...register, [name]: value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await api.registerUser(register)
    navigate('/login');
  }catch (err){
    console.log(err)
  }
}
return(
    <>
    <Nav/>
    <div className="container d-flex justify-content-center align-items-center mb-5">
  <div className="row">
    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
      <div className="card shadow auth">
        <img
          src="https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
        <h3 className="auth-titles">Regístrate</h3>
          <form
          onSubmit={handleSubmit}
            className="needs-validation"
            novalidate
          >
            <div className="mb-3">
              <label for="username" className="form-label">Crea una contraseña</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={register.password}
                onChange={handleChange}
              />
            </div>
            <div style={{display: register.password.length && !display ? "block" : "none"}}>
            <p className={`item--check ${strengthValue.length && "checked"}`}><i class="ri-checkbox-circle-fill"></i>Al menos 8 caracteres.</p>
            <p className={`item--check ${strengthValue.special && "checked"}`}><i className="ri-checkbox-circle-fill"></i>Al menos 1 símbolo.</p>
            <p className={`item--check ${strengthValue.numbers && "checked"}`}><i className="ri-checkbox-circle-fill"></i>Al menos 1 número.</p>
            <p className={`item--check ${strengthValue.caps && "checked"}`}><i className="ri-checkbox-circle-fill"></i>Al menos 1 letra en mayúscula.</p>
            <p className={`item--check ${strengthValue.small && "checked"}`}><i className="ri-checkbox-circle-fill"></i>Al menos 1 letra en minúscula.</p>
            </div>
            <div className="mb-3">
              <button className="btn btn-info btn-block">Submit</button>
            </div>
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