import React from "react";

const Navbar = () => {
    
    return (
         <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="text-white navbar-brand" href="#">
                        <img src="" />LGBTQIA+
                        </a>
                    <div className="col-6 navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                 <a className="text-white nav-link active" aria-current="page" href="#">Home</a>
                             </li>
                             <li className="nav-item">
                                <a className="text-white nav-link" href="#">About</a>
                             </li>
                             <li className="nav-item">
                                <a className="text-white nav-link" href="#">Services</a>
                             </li>
                             <li className="nav-item">
                                 <a className="text-white nav-link disabled">Contact</a>
                             </li>
                        </ul>
                    </div>
                 </div>
            </nav>
        )
    }

export default Navbar

