import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendList from './FriendList'
import NewFriendForm from './NewFriendForm';
export default function Home() {
    const [friends, setFriends] = useState([]);
    const [updater, setupdater] = useState(true)
    useEffect(() => {
        axiosWithAuth()
            .get("friends")
            .then(res => {
                console.log("This is the result from the friends get request", res)
                setFriends(res.data)
            })
            .catch(err => console.log("There was a problem retrieving the friends from the API", err))
    }, [updater])

    const updateHelper = () => {
        setupdater(!updater)
    }

    return (
        <div>
           <h1>Welcome to the Friend's page</h1> 
           <h4>Add a new friend here</h4>
           <NewFriendForm updateHelper={updateHelper}/>
           <FriendList friends={friends}  />
        </div>
    )
}
