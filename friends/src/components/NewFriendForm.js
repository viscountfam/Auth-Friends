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
            height: "",
            id: ""
        })
    }

    const postFriend = (newFriend) => {
            axiosWithAuth()
            .post("friends", newFriend)
            .then(res => {
                console.log("Post successful new friend created", res)
            })
            .catch(err => {
                console.log("The post was unsuccessful", err)
            })
    }

    const putFriend = (newFriend) => {
        axiosWithAuth()
        .put(`friends/${newFriend.id}`, newFriend)
        .then( res => {
            console.log(`The friend ${newFriend.name} has been updated with the following data ${newFriend}`, res)
        })
        .catch( err => {
            console.log(`The update was unsuccessful`, err)
        })
    }
    const updateSubmit = () => {
        console.log("friend before being sent to the server for updates", newFriend)
        putFriend(newFriend)
        resetForm()
        props.updateHelper()
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
            <input
                type="number"
                name="id"
                value={newFriend.id}
                onChange={handleChange}
                placeholder="id"
            />
        <button onClick={() => {submit()}}>Submit new friend</button>
        <button onClick={() => {updateSubmit()}}>Update friend</button>
        </div>
    );
};
