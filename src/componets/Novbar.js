import React from 'react'
import logo from '../image/logo1.jpg';

const Novbar = ()=> {
      return (<>

<nav class="navbar navbar-expand-lg bg-light navbar-light">

  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src={logo} className="img-responsive" width="100"/></a>
   <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">MEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">WOMEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">KIDS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">HOME & LIVING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">OFFER</a>
        </li>
      </ul>
      <div className="m-auto">

    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    </div>
   
    <ul className="navbar-nav">

<li className="nav-item">
<a className="nav-link text-dark far fa-user" href="#">profile</a>
 
</li>
<li className="nav-item">
<a className="nav-link active text-dark far fa-laugh" aria-current="page" href="#">MEN</a>
</li>
<li className="nav-item">
<a className="nav-link text-dark fas fa-shopping-bag" href="#">Bags</a>
 
</li>
     
     
    </ul>
    </div>
  </div>
</nav>
{/* 
<nav classNameName="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#"><img src={logo} className="img-responsive" width="100"/></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">WOMEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">KIDS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">HOME & LIVING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">OFFER</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


      </>
           
      )
}

export default Novbar;