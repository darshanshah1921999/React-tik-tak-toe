import React from "react";

export default function Cell(props){
    const {id,value,handleButtonClick} = props;
    return(
        <>
            <button className="cell" onClick={()=>handleButtonClick(id)}>{value}</button>
        </>
    )
}