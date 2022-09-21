import React from "react"
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <header>
        <div className="left">
          <Link id="logo-link" to="/">
          <div className="logo">Usuarios</div>
          </Link>
        </div>
      </header>
    )
}