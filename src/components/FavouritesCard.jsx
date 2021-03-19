import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";




export default function FavouritesCard(props){
    console.log("key")
    console.log(props.key)
    return (
        // <div>
        //     <p>{props.NameOfRestaurant}</p>
        //     <p>{props.FoodItem}</p>
        //     <p>{props.Cost}</p>
        //     <p>{props.image}</p>
        // </div>
        <div>
             <div className="card bg-dark border-danger text-white" style={{width : '17rem'}}>
             <img class="card-img-top" src={props.FoodImage} alt="Card image cap"/>
   <div class="card-body">
       <p>{props.NameOfRestaurant}</p>
             <p class="card-title">{props.FoodItem}</p>
             <p>Cost Rs.{props.Cost}</p>
     
  </div>
    </div><br/></div>
    )


}