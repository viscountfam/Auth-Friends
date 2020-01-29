import React from 'react'

export default function Friend(props) {
    return (
        <div>
            <h3>Name: {props.friend.name}</h3>
            <h4>Age: {props.friend.age}</h4>
            <h5>email: {props.friend.email}</h5>
        </div>
    )
}
