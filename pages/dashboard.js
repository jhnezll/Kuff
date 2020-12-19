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
                <ProfileSquare
                    username={account.username}
                    src="https://media1.popsugar-assets.com/files/thumbor/OjVl1xpKd_jZEIVgntaEWc11wts/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg"
                />
            )}
        </div>
    )
}