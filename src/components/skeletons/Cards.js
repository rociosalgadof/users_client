import React from "react";

export default function SkeletonCard(){
    const defaultArray = [0,1,2,3,4,5,6,7]
    return(
        <>
        {defaultArray.map((element)=>{return (
        <div class="card__skeleton">
        <div class="card__image loading"></div>
        <div className="skeleton__container">
        <div class="card__description loading"></div>
        <div class="card__title loading"></div>
        <div class="card__description loading"></div>
        </div>
        </div>
        )})}
        </>
    )
}