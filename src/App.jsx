import React from "react"
import { Route, Switch,NavLink, Redirect } from "react-router-dom";
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Search from "./Search"

import Error from "./Error"
var App=()=>{
return(
    <>
    <nav>
    <NavLink exact activeClassName="active" to="/about">About</NavLink>
    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
    <NavLink activeClassName="active" to="/service">Service</NavLink>
    <NavLink activeClassName="active" to="/search">search</NavLink>
    </nav>
    <Switch>
        <Route exact path="/about" component={About}/>
        <Route path="/contact" render={()=> <Contact Value="contact"/>}/>
       
        <Route path="/service/:name" component={()=> <Service Value="services"/>}/>
        <Route path="/search" component={()=> <Search Value="Serach"/>}/>
        <Route  component={Error}/>
        <Redirect />
    </Switch>
   </>
)
}
export default App;