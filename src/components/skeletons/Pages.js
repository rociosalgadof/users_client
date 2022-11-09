import React from "react"

export default function Pages(){
    const defaultArray = [0,1,2,3,4,5]
    return(
        <>
        {defaultArray.map((element)=>{return (
            <span className="page-num pages__loading loading"></span>
        )})}
        </>
    )
}