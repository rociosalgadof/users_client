import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteUser } from "../../actions/users";

export default function Card(props){
    const dispatch = useDispatch();
    function handleClick(id){
        dispatch(deleteUser(id));
    }
    return (
        <article className={props.class}>
            <img src={props.element.avatar} alt="" className="card-image"/>
            <div className="text">
                <h3 className="card-text">{props.element.first_name} {props.element.last_name}</h3>
                <p className="card-p">{props.element.username}</p>
                <Link to={`/${props.element.id}`}><button className="card-button">Más Info</button></Link>
            </div>
            <div className="delete-btn" onClick={() => handleClick(props.element._id)}>Eliminar</div>
        </article>
    )
}