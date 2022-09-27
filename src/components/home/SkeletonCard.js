import React from "react";

export default function SkeletonCard(){
    return(
        <div class="card__skeleton">
        <div class="card__image loading"></div>
        <div class="card__title loading"></div>
        <div class="card__description loading"></div>
    </div>
    )
}