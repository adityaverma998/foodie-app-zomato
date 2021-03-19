
import { Link } from "react-router-dom";
import axios from 'axios';
import React , { useState,useEffect } from 'react';
export default function Header(props) {
  const [image,setimage] = useState('');
  const [UserData,setUserData] = useState();
    const [UserID,setUserID] = useState(0);

  
  

    return (
      <nav  className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div  className="container">
        <Link className="navbar-brand" to="/">
          <font color="red"><b>FOODIE</b></font>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto" />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whishlist">WhishList
             </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart
             </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/searhnews">Search News
             </Link>
            </li> */}
          {/* </ul>
        </div> */}
      </div>
    </nav>
    )
}
