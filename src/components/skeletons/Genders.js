import React from "react"

export default function Genders(){
    const defaultArray = [0,1,2,3,4,5]
    return(
        <>
        {defaultArray.map((element)=>{return (
            <span className="genero loading" id="genero__loading"></span>
        )})}
        </>
    )
}