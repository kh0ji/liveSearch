import React, { useState } from "react"
import Img from "./Img"
var Search=(props)=>{
 var   [img,setImg]= useState("");
    var inputchange=(e)=>{
var {value}=e.target
setImg(value)

    }
   
    return( <>
        
        <div style={{display:"flex" ,flexDirection:"column"}}>
     
           <input type="text" placeholder="search" value={img}  onChange={inputchange}/>
          {img!==""?( <Img src={img}/>):null}
           </div>
        </>
    )
}
export default Search