import React, {useEffect, useState} from 'react';
import fb from "../../util/firebase-config";

export default function SetProfile() {
    const [fileUrl, setFileUrl] = useState(null)
    const [accounts, setAccounts] = useState([])

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = fb.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }

    function handleSubmit(e) {
        e.preventDefault()
        const username = e.target.username.value
        if(!username){
            return
        }
        fb.firestore().collection("accounts").doc().set({
            username: username,
            avatar: fileUrl
        })
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = await fb.firestore().collection('accounts').get()
            setAccounts(usersCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchUsers()
    }, [])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={onFileChange}/>
                <input type="text" name="username" placeholder="NAME"/>
                <button>Submit</button>
            </form>
            <ul>
                {accounts.map((accounts) => {
                    return(
                        <li key={accounts.username}>
                            <img src={accounts.avatar} alt={accounts.username}/>
                            <p>{accounts.username}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}