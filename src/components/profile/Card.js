import React, { useState } from "react";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../home/Card"
import Slider from "./Slider";


export default function ProfileCard(){
    const state = useSelector((state) => state.users);
    const { userId } = useParams();
    const [user, setUser] = useState(0)
    const [displayedUsers, setDisplayedUsers] = useState([])

    useEffect(()=>{
        setUser(state.find((element)=> element.id === parseInt(userId)))
    },[userId])

    useEffect(()=>{
        if(user){
            setDisplayedUsers(state.filter((element)=> element.employment.key_skill === user.employment.key_skill && user.id !== element.id))
        }
    },[user])

    console.log(user)

    return(
        <>
            <div className="container-profile">
        <div className="wrapper">
            <div className="left">
                <img src={user && user.avatar} alt="user" width="100"/>
                <h4>{user && user.first_name} {user && user.last_name}</h4>
                 <p>{user && user.username}</p>
            </div>
            <div className="right">
                <div className="info">
                    <h3>Contacto</h3>
                    <div className="info_data">
                         <div className="data">
                            <h4>Email</h4>
                            <p>{user && user.email}</p>
                         </div>
                         <div className="data">
                           <h4>Tel.</h4>
                            <p>{user && user.phone_number}</p>
                      </div>
                    </div>
                </div>
              
              <div className="projects">
                    <h3>Información</h3>
                    <div className="projects_data">
                         <div className="data">
                            <h4>Habilidades</h4>
                            <p>{user && user.employment.key_skill}</p>
                         </div>
                         <div className="data">
                           <h4>Empleo</h4>
                            <p>{user && user.employment.title}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <h2 class="slider-category">Usuarios con las mismas habilidades que {user && user.first_name} {user && user.last_name}</h2>
    <Slider displayedUsers={displayedUsers}/>
        </>
    )
}