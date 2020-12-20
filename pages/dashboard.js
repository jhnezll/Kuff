import React, {useEffect, useState} from "react";
import ProfileSquare from "../components/ProfileSquare";
import fb from "../util/firebase-config";

function useAccounts() {

    const [accounts, setAccounts] = useState([])
    const db = fb.firestore()

    useEffect(() => {
        db.collection("accounts").onSnapshot((snapshot => {
            const newAccounts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setAccounts(newAccounts)
        }))


    }, [])

    return accounts
}

export default function Dashboard() {
    const accounts = useAccounts()

    return (
        <div className="bg-gray-50 h-screen w-full">
            {accounts.map(account =>
                //Notice it becomes account
                <ProfileSquare
                    username={account.username}
                    src={account.avatar}
                />
            )}
        </div>
    )
}