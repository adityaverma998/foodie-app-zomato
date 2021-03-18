import React from 'react';
import SearchBox from './SearchBox';

export default function Dashboard(props){
    // username = console.log(props.match.params.username)
    return (
        <div>
            <SearchBox/>
            <h1>{props.match.params.username}</h1>
        </div>
    )
}