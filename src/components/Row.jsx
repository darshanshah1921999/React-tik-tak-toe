import React from "react";
import Cell from "./Cell";

export default function Row(props){
    const {rowVal , handleButtonClick,dimension,rowIndex} = props;
    let row = new Array(dimension);
    for(let i=0; i<dimension;i++){
        row[i] = rowIndex.toString() + i.toString();
    }
    // console.log(rowVal);
    const listRow = row.map((val,index) =>
        <Cell key={val.toString()} handleButtonClick={handleButtonClick} id={val} value={rowVal[index]}/>
    );
    
    return(
        <>
            <div className="row">
                {listRow}
            </div>
        </>
    );
}