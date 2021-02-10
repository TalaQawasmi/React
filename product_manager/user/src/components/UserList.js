import React from 'react'
export default props => {
    return (
        <div>
            {props.people.map((user, idx)=>{
                return <p key={idx}>{user.title}, {user.price}, {user.description}</p>
            })}
        </div>
    )
}