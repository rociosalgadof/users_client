import React from "react";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import pinterest from "../images/pinterest.svg"

export default function Footer(){
    return (
        <footer>
        <div className="logo-footer">Usuarios</div>
       <ul className="footer-links">
        <li>Recursos</li>
        <li>Blogs</li>
        <li>Desarrollo web</li>
        <li>Ayuda</li>
      </ul>
      <ul className="footer-links">
        <li>La Empresa</li>
        <li>Sobre nosotros</li>
        <li>Nuestro equipo</li>
        <li>Carreras</li>
        <li>Contacto</li>
      </ul>
        <div className="footer-social">
          <img src={facebook} alt="facebook" className="social-links"/>
          <img src={twitter} alt="twitter" className="social-links"/>
          <img src={instagram} alt="instagram" className="social-links"/>
          <img src={pinterest} alt="pinterest" className="social-links"/>
        </div>
      </footer>
    )
}