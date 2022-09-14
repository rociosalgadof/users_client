import React from "react";
import Card from "../components/home/Card"

export default function createSliderViewsObj(arr){
let array = []
for(var i = 0; i < arr.length; i++){
    let arr1 = []
    for(var j = 0; j < arr[i].length; j++){
        arr1.push(<Card element={arr[i][j]} key={arr[i][j].id} class={"card card-slider"}/>)
    }
    array.push(arr1)
}
return array
}

// console.log(createSliderViewsObj([[1,2,3,4],[5,6]]))