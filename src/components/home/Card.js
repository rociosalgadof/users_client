import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { deleteCandidate } from "../../actions/candidates";

export default function Card(props){
    const global = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false)
    
    useEffect(()=>{
        setIsLogged(global.user.isLogged)
    }, [global])

    function handleClick(id){
        dispatch(deleteCandidate(id));
    }
    return (
        <article className={props.class}>
            <img src={props.element.avatar} alt="" className="card-image"/>
            <div className="text">
                <h3 className="card-text">{props.element.first_name} {props.element.last_name}</h3>
                <p className="card-p">{props.element.username}</p>
                <Link to={`/${props.element.id}`}><button className="card-button">Más Info</button></Link>
            </div>
            <div className="delete-btn" style={{display: !isLogged && "none"}} onClick={() => handleClick(props.element._id)}>Eliminar</div>
        </article>
    )
}