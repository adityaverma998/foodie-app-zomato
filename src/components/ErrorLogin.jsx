import React from 'react';
import { useHistory } from "react-router-dom";

export default function ErrorLogin(){
    const history = useHistory();
    history.push('/login')
    return (
        <div>
            <h1>error</h1>
        </div>
    )

}