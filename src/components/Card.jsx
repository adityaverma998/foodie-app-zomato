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
    const [FoodImage,setFoodImage] = useState('')

    const favouriteobject = {
        HotelName,
        FoodName,
        Cost,
        FoodImage
    }

    useEffect ( () => {
        
        if(UserID == 0)
        {
            console.log("nothing")
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
        setFoodImage(props.FoodImage)
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
        <div>
             <div className="card bg-dark border-danger text-white" style={{width : '17rem'}}>
             <img class="card-img-top" src={props.FoodImage} alt="Card image cap"/>
   <div class="card-body">
       <p>{props.NameOfRestaurant}</p>
             <p class="card-title">{props.FoodItem}</p>
             <p>Cost Rs.{props.Cost}</p>
     <div>
                <button type="submit" className="btn btn-danger"
                onClick={addToFavourites}
                >Add To Favourites Section</button>
            </div>
  </div>
    </div><br/></div>
        
        

    
    )

}