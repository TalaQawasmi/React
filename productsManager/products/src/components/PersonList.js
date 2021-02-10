import React from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;
    const deletePerson = (id) => {
        axios.delete('http://localhost:8000/api/people/' + id)
            .then(res => {
                removeFromDom(id)
            })
            navigate('/people/')
    }
    return (
        <div>
            <center>
            {props.people.map((person, idx)=>{



                return <Link to={'/people/'+person._id } > <p key={idx}>{person.title}</p> 
                 <button onClick={(e)=>{deletePerson(person._id)}}>
                Delete
            </button>
            </Link> 


            })}
            </center>
        </div>
    )
}


        