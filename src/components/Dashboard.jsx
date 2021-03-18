import React,{useEffect, useState} from 'react';
import Search from './Search';
import axios from 'axios'
import Card from './Card';
import FavouritesCard from './FavouritesCard';

export default function Dashboard(props){
    const [username,setUsername] = useState(props.match.params.username)
    const [locationdash,setLocationDash]=useState('');
    const [hotelData,setHotelData] = useState([]);
    const [userid,setUserid] = useState(0);

    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [id,setId] = useState(0);
    const [cityname,setCityname] = useState('');
    const [email,setEmail] = useState('');
    const [favourites,setFavourites] = useState([]);
    
    const getLocation = (location) => {
        setLocationDash(location)
    }

    const newData = {
        username,
        password,
        name,
        image,
        id,
        cityname,
        email,
        favourites
    }

    const [checkdash,setCheckdash] = useState(0);
    useEffect( () => {
        if(checkdash == 0)
        {
            console.log('nothing here')
        }
        else if(!favourites)
        {
            console.log('nothing here too')
        }
        else
        {
            console.log(newData);
            console.log("in use effect of dashboard")
            console.log(favourites);

            axios.put(`http://localhost:3100/users/${id}`, newData , {
            headers : {'Content-Type':'application/json'}
        })

    }

    },[checkdash,favourites])
    

    const getHoteldata = (data) => {
        // console.log('from dashboard')
        // console.log(data)

        setHotelData(data)

    }

    const getFavourites = (id,favouritesfunc) => {
        console.log('favourites')
        console.log(favouritesfunc)
        console.log(id)
        setUserid(id);


       
       

        axios.get(`http://localhost:3100/users/${id}`)
        .then((response) => {
            console.log(response.data)
           
            setPassword(response.data.password);
            setName(response.data.name);
            setImage(response.data.image);
            setId(response.data.id);
            console.log('ravi id ')
            console.log(id);
            setCityname(response.data.cityname);
            setEmail(response.data.email);
            setFavourites([...response.data.favourites,favouritesfunc])
            setCheckdash(checkdash+1);
        })

        
        
        







    }
    

    // hotelData contains all the restauarant data from location

    return (

        <div>
            <Search username = {username} locationchildfunc = {getLocation}
            hoteldatachildfunc = {getHoteldata}/>
            <div>
                {
                    hotelData.map((hotel) => 
                    <Card
                    username = {username}
                    getFavouriteschildfunc = {getFavourites}
                    key = {hotel.id}
                    NameOfRestaurant = {hotel.NameOfRestaurant}
                    FoodItem = {hotel.FoodItem}
                    Cost = {hotel.Cost}
                    />)
                } 
            </div>
            <div>
                {
                    favourites.map((favourite) => 
                        <FavouritesCard
                        key = {favourite.id}
                        NameOfRestaurant = {favourite.HotelName}
                        FoodItem = {favourite.FoodName}
                        Cost = {favourite.Cost}
                        />)
                }
            </div>  
            <h1>{props.match.params.username}</h1>
        </div>
    )
}