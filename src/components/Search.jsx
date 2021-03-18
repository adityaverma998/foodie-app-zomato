import axios from 'axios';
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

export default function Search(props){
    const history = useHistory();
    const [location,setLocation]=useState('');
    
    const SearchSubmit = () => {
        props.locationchildfunc(location);

        
        axios.
        get(`http://localhost:3100/${location}`)
        .then((response) => {
            props.hoteldatachildfunc(response.data);
        })
        .catch((error) => {
            console.log("error bro")
        })
        


    }
    return (
        <div>
            <div className="mb-3">
                            <input type="text" placeholder="Enter Location" className="form-control"
                            onChange={(e)=>{setLocation(e.target.value)}}
                            />
            </div>
            <div>
                        <button type="submit" className="btn btn-primary"
                        onClick={SearchSubmit}
                        >Search</button>
            </div>  

        </div>
    )
}