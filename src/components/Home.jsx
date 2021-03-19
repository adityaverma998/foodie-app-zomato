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
        <div><br/>
        <br/>
            <h1 align="center">
            If you are a new User click on Register
        </h1>
        <div align="center">
        
        <Link to = "/register">Register
                        </Link>
        </div>
        <br/><br/>
        <h1 align="center">
            If you are registered user click on Login
        </h1>
        <div align="center">
        
        <Link to = "/login">Login</Link>
        </div>
        </div>
    )
}