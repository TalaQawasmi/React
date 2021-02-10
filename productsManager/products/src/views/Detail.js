import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router'
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <center>
        <div>
        <h3>Product's Details</h3>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <p>Description: {person.description}</p>
            <p><Link to={"/people/" + person._id + "/edit"}>Edit</Link></p>
        </div>
        </center>
    )
}