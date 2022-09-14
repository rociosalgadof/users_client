import React from "react";
import { useState, useEffect } from "react";
import isObjectEmpty from "../../utils/isObjEmpty"
import checkTrue from "../../utils/checkTrue"

export default function PageNum(props){
    const [key, setKey] = useState("");
    const [active, setActive] = useState("");
  
    function handleClick() {
      props.setPages(function (oldValue) {
        return {
          ...oldValue, [key]: false, [props.num]: true }
      });
    }
  
    useEffect(() => {
      if (!isObjectEmpty(props.pages)) {
          setKey(checkTrue(props.pages));
          if (props.pages[props.num] === true) {
            setActive("page-num-active");
          } else {
            setActive("");
          }
      }
    }, [props.pages]);

    return(
        <span className={`page-num ${active}`} onClick={handleClick}>{props.num}</span>
    )
}