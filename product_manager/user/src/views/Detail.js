import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setUser(res.data))
    }, [])
    return (
        <div>
            <p>Title: {user.title}</p>
            <p>Price: {user.price}</p>
            <p>Description: {user.description}</p>
        </div>
    )
}