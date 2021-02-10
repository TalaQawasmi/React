
import React, { useEffect, useState } from 'react'
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import axios from 'axios';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <UserForm/>
           <hr/>
           {loaded && <UserList people={people}/>}
        </div>
    )
}