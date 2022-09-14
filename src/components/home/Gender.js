import React from "react";
import checkTrue from "../../utils/checkTrue";
import isObjectEmpty from "../..//utils/isObjEmpty"
import { useState, useEffect } from "react";

export default function Gender({filterObject, setFilterObject, text}){
    const [key, setKey] = useState("");
    const [active, setActive] = useState("");
  
    function handleClick() {
      setFilterObject(function (oldValue) {
        return {
          ...oldValue, [key]: false, [text]: true }
      });
    }
  
    useEffect(() => {
      if (!isObjectEmpty(filterObject)) {
          setKey(checkTrue(filterObject));
          if (filterObject[text] === true) {
            setActive("active-gender");
          } else {
            setActive("");
          }
      }
    }, [filterObject]);


    return(
        <span className={`genero ${active}`} onClick={handleClick}>{text}</span>
    )
}