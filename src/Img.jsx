import React from "react"

var Img=(props)=>{
    var image=`https://source.unsplash.com/400x300/?${props.src}`
    return(
        <img src={image} alt=""/>
    )
}
export default Img;