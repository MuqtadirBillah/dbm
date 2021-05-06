import React from "react";

function Navbar(){
    return(
        <div className="navbarDiv">
            <nav className="navbar navbar-expand-lg mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand" href={process.env.PUBLIC_URL+"/"} ><img src="images/logo.png" alt="" width="50px"/> DBM </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">...</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link linkStyle" aria-current="page" href={process.env.PUBLIC_URL+"/"}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkStyle" aria-current="page" href={process.env.PUBLIC_URL+"/"}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkStyle" aria-current="page" href={process.env.PUBLIC_URL+"/"}>Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkStyle" aria-current="page" href={process.env.PUBLIC_URL+"/Blogs"}>Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkStyle" aria-current="page" href={process.env.PUBLIC_URL+"/contact"}>Contact us</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;