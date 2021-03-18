import React,{useState} from 'react'
import axios from 'axios'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

export default function Home(){

    const Registerfunc = () => {
        //<Register/>
    }

    const Loginfunc = () => {
        //<Login/>
    }

    return (
        <div>
            <h1>
            If you are a new User click on Register
        </h1>
        <div>
        
        <button type="submit" className="btn btn-primary"
                        ><Link to = "/register">Register
                        </Link></button>
        </div>
        <h1>
            If you are registered user click on Login
        </h1>
        <div>
        
        <button type="submit" className="btn btn-primary"
                        ><Link to = "/login">Login</Link></button>
        </div>
        </div>
    )
}