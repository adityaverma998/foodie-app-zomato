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
        <div >
            <div className="mb-6">
                            <input type="search" className="form-control rounded" placeholder="Search for your Favourite Restaurant" aria-label="Search"
    
                            onChange={(e)=>{setLocation(e.target.value)}}
                            />
            </div>
            <br/>
            <div className="bcenter">
                        <button type="submit"  className="btn-ge-started"
                        onClick={SearchSubmit}
                        >Search</button>
            </div>  

        </div>
    )
}