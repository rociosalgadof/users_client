import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/user";



export default function Nav(){
  const dispatch = useDispatch();
  const global = useSelector((state) => state);
  const [isLogged, setIsLogged] = useState(false)

  useEffect(()=>{
    setIsLogged(global.user.isLogged)
  }, [global])

  
  async function handleClick(){
    const response = await dispatch(logoutUser());
  }
    return(
        <header>
        <div className="left">
          <Link id="logo-link" to="/">
          <div className="logo">Usuarios</div>
          </Link>
        </div>
        <div className="left">
          <Link id="link-auth" to="/login">
          <div className="link-auth"  style= { {display: isLogged && 'none'}}>Iniciar sesión</div>
          </Link>
          <Link id="link-auth" to="/register">
          <div className="link-auth" style= { {display: isLogged && 'none'}}>Regístrate</div>
          </Link>
          <Link id="link-auth" to="/" >
          <div className="link-auth" style= { {display: !isLogged && 'none'}} onClick={handleClick}>Cerrar Sesión</div>
          </Link>
        </div>
      </header>
    )
}