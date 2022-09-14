import React from "react";
import Card from "../home/Card"
import SliderWrapper from "./SliderWrapper";
import getViews from "../../utils/getViews";

export default function Slider(props){
const elements = props.displayedUsers.map((element)=>{return <Card element={element} key={element.id} class={"card card-slider"}/>})
let first;
let second;
if(elements.length<=4){
    let num = 4
    if(elements.length<4){
        num = elements.length
    }
    first = elements.slice(0, num);
}else{
    first = elements.slice(0, 4);
    let num = 8
    if(elements.length<8){
        num = elements.length
    }
    second=elements.slice(4, num);
}
return(
    <div id="carouselExampleControls" className="carousel slide carousel--slider" data-bs-ride="carousel">
    <div className="carousel-inner">
      <SliderWrapper arr={getViews(props.displayedUsers)}/>
    </div> 
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
)
}