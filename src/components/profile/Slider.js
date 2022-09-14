import React from "react";
import Card from "../home/Card"
import SliderWrapper from "./SliderWrapper";
import getViews from "../../utils/getViews";

export default function Slider(props){
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