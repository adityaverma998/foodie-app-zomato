import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";




export default function Login(){
    const history = useHistory();
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const LoginSubmit = () => {
        //const registerData = {username,password,name,cityname,email,image};
        axios.
        get('http://localhost:3100/users')
        .then((response) => {
            // response.data
            for(let i=0;i<response.data.length;i++)
            {
                if(response.data[i].username == username)
                {
                    if(response.data[i].password == password)
                    {
                        console.log("heyal")
                        history.push(`/dashboard/${response.data[i].username}`)
                    }
                    else
                    {
                        alert("Wrong password login again")
                        
                        console.log("wrong")
                        history.push("/login")
                    }
                }
                else
                {
                    continue;
                }
            }
            return (<div>
                Un registered User
            </div>)
        })
        .catch((error) => {
            console.log("error searching data base for users")
        })
    }

    return (
        <div>
        <div className="container mt-4">
            <h2>Login</h2>
            <div className="row mt -3">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="mb-3">
                            <input type="text" placeholder="Enter your username" className="form-control"
                            onChange={(e)=>{setUserName(e.target.value)}}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Enter your password" className="form-control"
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                        </div>
                        {/* <p>Not a User ? Then enter username and password above and click on Register first</p> */}
                        <div>
                        <button type="submit" className="btn btn-primary"
                        onClick={LoginSubmit}
                        >Login</button>
                        </div>                         
                </div>
            </div>
             {/* <div className="col-md-6 mt-4">
                    <AddContact addContact={saveContact}/>
            </div> */}
        </div>
           
    </div>
    )
}