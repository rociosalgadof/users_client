import React from "react";
import Card from "../home/Card";
import createSliderViewsObj from "../../utils/createsSliderViews";

export default function SliderWrapper({arr}){
let cards = createSliderViewsObj(arr)
let elements = []
for (let i=0; i<cards.length; i++){
    elements.push(<div className= {`carousel-item ${i===0 && "active"}`}>
    <div class="cards-wrapper">
    {cards[i]}
</div>
  </div>)
}
return(
<>
{elements.length && elements.map(function(element){return element})}
</>
    
)
}