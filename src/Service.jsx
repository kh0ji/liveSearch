import React from "react"
import {useParams} from "react-router-dom"
var Service=({match})=>{
    var {name}=useParams()
    return(
        <h1>
            {name}
        </h1>
    )
}
export default Service