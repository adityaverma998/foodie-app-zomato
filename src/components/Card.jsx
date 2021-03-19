import axios from 'axios';
import React , { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";





export default function Card(props){
    const [UserData,setUserData] = useState();
    const [UserID,setUserID] = useState(0);
    const [HotelName,setHotelName] = useState('');
    const [FoodName,setFoodName] = useState('');
    const [Cost,setCost] = useState('');
    const [check,setCheck] = useState(0);
    const [image,setImage] = useState('')

    const favouriteobject = {
        HotelName,
        FoodName,
        Cost,image
    }

    useEffect ( () => {
        
        if(UserID == 0)
        {
            console.log("nothign")
        }
        else
        {
            console.log(UserID)
            props.getFavouriteschildfunc(UserID,favouriteobject)
        }
    },[UserID])


    
    const addToFavourites = () => {
        setHotelName(props.NameOfRestaurant);
        setFoodName(props.FoodItem);
        setCost(props.Cost)
        setImage(props.image)
        // getting user data;
        
        console.log("in add to favourites")
        console.log(UserID)

       

        axios.get("http://localhost:3100/users")
        .then((response) => {
            setUserData(response.data);
            console.log(response.data);
            for(let i = 0;i<response.data.length;i++)
            {
                console.log("inside for loop")
                console.log(response.data[i])
                if(response.data[i].username === props.username)
                {
                    console.log("inside if condition")
                    console.log(response.data[i].id)
                    setUserID(response.data[i].id)
                    
                    break;
                }
            }

        });
        
        

        // passing restaurant details and User to parent component
        //axios.(`http://localhost:3100/users`)

    }
    return (
        <div className="card my-5"  style={{width : '17rem'}}>
             <div className="card">
            <p>{props.NameOfRestaurant}</p>
            <p>{props.FoodItem}</p>
            <p>{props.Cost}</p>
            <p>{props.image}</p>
            <div>
                <button type="submit" className="btn btn-primary"
                onClick={addToFavourites}
                >Add To Favourites Section</button>
            </div>
        </div>
        <div ><br/></div>
        </div>
    )

}