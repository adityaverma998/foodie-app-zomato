import React,{useState} from 'react'
import axios from 'axios'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'
import web from "../img/home.jpeg";
export default function Home(){

    const Registerfunc = () => {
        //<Register/>
    }

    const Loginfunc = () => {
        //<Login/>
    }

    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        
                            
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                <h1>
                                   Welcome to <strong className="brand-name">FOODIE </strong> 
                                </h1>
                                
                                <Link to = "/login" className="btn-get-started">Login</Link>
                                
                                <br/>
                                <br/>
                                <Link to = "/register" className="btn-get-started">Register</Link>

                                 </div>
                                 
                             
                            <div className="header-img">
                                <img src={web}  className="img-fluid animated"/>
                            </div>
                            
                        </div>
                    </div>

               

            </section>
        </>
        
    )
}