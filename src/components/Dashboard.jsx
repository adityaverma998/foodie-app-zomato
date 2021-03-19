import React,{useEffect, useState} from 'react';
import Search from './Search';
import axios from 'axios'
import Card from './Card';
import FavouritesCard from './FavouritesCard';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import background from '../img/food.jpg';

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
            // setFavourites([...response.data.favourites,favouritesfunc])
            // setCheckdash(checkdash+1);

            let c = 0;
            for (let j = 0;j<response.data.favourites.length;j++)
            {
                if(response.data.favourites[j].HotelName === favouritesfunc.HotelName)
                {
                    if(response.data.favourites[j].FoodName === favouritesfunc.FoodName)
                    {
                        if(response.data.favourites[j].Cost === favouritesfunc.Cost)
                        {
                            console.log("i am batman")
                            setFavourites(response.data.favourites);
                            c = c + 1;
                        }
                    }
                }
            }
            if(c == 0)
            {
                setFavourites([...response.data.favourites,favouritesfunc])
            }

            setCheckdash(checkdash+1);
        })

    }
    

    // hotelData contains all the restauarant data from location

    return (

        <div style={{ 
            backgroundImage: `url(${background})` 
          }}>
              
            <Search username = {username} locationchildfunc = {getLocation}
            hoteldatachildfunc = {getHoteldata}/>
            <br/>
            <div className = 'container'>
            <div className="row">
            {/* <div className="col-md-8"> */}
                
                {
                    hotelData.map((hotel) => 
                    <Card
                    image={image}
                    username = {username}
                    getFavouriteschildfunc = {getFavourites}
                    key = {hotel.id}
                    NameOfRestaurant = {hotel.NameOfRestaurant}
                    FoodItem = {hotel.FoodItem}
                    Cost = {hotel.Cost}
                    FoodImage={hotel.FoodImage}
                    />)
                } 
            {/* </div> */}
            
            </div>
            <br/><br/>
            <div className="row">
            
                {
                    
                    favourites.map((favourite) => 
                    
                        <FavouritesCard
                        key = {favourite.id}
                        NameOfRestaurant = {favourite.HotelName}
                        FoodItem = {favourite.FoodName}
                        Cost = {favourite.Cost}
                        FoodImage={favourite.FoodImage}
                        />)
                }
            </div>
            
            </div>
            
            <h1  align="center"><font color="white">Hello {props.match.params.username} Welcome</font></h1>
        </div>
    )
}