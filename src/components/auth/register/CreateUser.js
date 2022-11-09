import React, {useState} from "react";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { checkUser } from "../../../actions/user";



export default function CreateUser(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState({username: ""})
  const [show, setShow] = useState("none")

function handleChange(event) {
    const { name, value } = event.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await dispatch(checkUser(register))
    navigate('/createPassword');
  }catch (err){
   setShow("block")
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
              <label for="username" className="form-label"> Crea un usuario</label>
              <input
                autofocus
                required
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={register.username}
                onChange={handleChange}
              />
            </div>
            <h6 className="user-exists" style={{display:show}}>Ese usuario ya existe.</h6>
            <div className="mb-3">
              <button className="btn btn-info btn-block">Submit</button>
            </div>
          </form>
        </div>
        
    </div>
    </div>
    <div className="col d-flex align-items-end">
    </div>
  </div>
</div>
    <Footer/>
</>
    )
}