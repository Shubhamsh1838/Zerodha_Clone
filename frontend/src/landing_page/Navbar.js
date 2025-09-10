import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
            <nav class="navbar navbar-expand-lg border-bottom ms-5">
                <div class="container p-2" style={{backgroundColor: "#FFF"}}>
                    <Link class="navbar-brand" to='/'><img src='Media/Images/logo.svg' alt='logo' style={{width: "20%", marginLeft: "80px"}}/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight: "120px"}}>
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to='/signup'>Signup</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " aria-current="page" to='/about'>About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " aria-current="page" to='/products'>Products</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " aria-current="page" to='/pricing'>Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " aria-current="page" to='/support'>Support</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
     );
}


export default Navbar;
