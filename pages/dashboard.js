import React from "react";
import ProfileSquare from "../components/ProfileSquare";

export default function Dashboard() {
    return(
        <div className="bg-gray-50 h-screen w-full">
            <ProfileSquare
                src="https://static.billboard.com/files/media/mark-wahlberg-marky-mark-1991-u-billboard-1548-1024x677.jpg"
                username="Marky Mark"
                onlineStatus="Online"
            />
        </div>
    )
}