import React from 'react'
import Friend from './Friend'
export default function FriendList(props) {
    return (
        <div>
            <h1>The Gang</h1>
            {props.friends.map(friend => (
                <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} updateHelper={props.updateHelper}/>
            ))}
        </div>
    )
}
