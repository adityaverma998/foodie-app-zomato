import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";




export default function FavouritesCard(props){
    console.log("key")
    console.log(props.key)
    return (
        <div>
            <p>{props.NameOfRestaurant}</p>
            <p>{props.FoodItem}</p>
            <p>{props.Cost}</p>
        </div>
    )


}