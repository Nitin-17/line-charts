import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav_bg w-100">
    <div className='row'>
      <div className="col-6 mx-auto">
        </div>
        </div>
      <div className='row'>
      <div className="col-2 mx-auto">
      <nav className="navbar navbar-expand-lg"> 
  <div>
    <NavLink className="navbar-brand" to="/"><strong style={{color: "#3498db"}}>First version</strong></NavLink>
    <NavLink className="navbar-brand" to="/charts2"><strong style={{color: "#3498db"}}>Second version</strong></NavLink>
</div>
</nav>
</div>
</div>
</div>
</>
  )
}
