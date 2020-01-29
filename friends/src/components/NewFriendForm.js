import React, {useState} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"
export default function NewFriendForm(props) {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        });
    };
    const resetForm = () => {
        setNewFriend({
            name: "",
            age: "",
            height: ""
        })
    }

    const postFriend = (friend) => {
            axiosWithAuth()
            .post("friends", friend)
            .then(res => {
                console.log("Post successful new friend created", res)
            })
            .catch(err => {
                console.log("The post was unsuccessful", err)
            })
    }

    const submit = () => {
        console.log("new friend before being sent to the server", newFriend)
        postFriend(newFriend)
        resetForm()
        props.updateHelper()
    }

    return (
        <div>
             <input 
                type="text"
                name="name"
                value={newFriend.name}
                onChange={handleChange}
                placeholder="name"
            />
            <input
                type="number"
                name="age"
                value={newFriend.age}
                onChange={handleChange}
                placeholder="age"
            />
            <input
                type="email"
                name="email"
                value={newFriend.height}
                onChange={handleChange}
                placeholder="email"
            />
        <button onClick={() => {submit()}}>Submit new friend</button>
        </div>
    );
};
