import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

const AuthorsTable = props => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAuthors")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])
    const navigateToNewRoute = () => {
        navigate("/new");
    }
    return(
        <div className="container">
            {authors.length > 0 && 
                authors.map((item,index)=>{
                    return<div key={index}>{item.name}</div>
                })
            }
            <input type='button' value='please press here to add a new author' onClick={navigateToNewRoute}/>
        </div>
    )

}

export default AuthorsTable

