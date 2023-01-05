import React from 'react'

const Footer = () => {
    return (
        <footer className="w-100 bg-light text-center">
        <div className="main-footer" style={{ position:"relative"}}> 
        <div className="container">
        <hr/>
        <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} Create by Nitin Saini | All right reserved | Terms Of Service | Privacy
        </p>
        </div>
        </div>
        </div>
        </footer>
            
               
    )
}
export default Footer;