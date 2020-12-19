import React from "react";

export default function ProfileSquare({src, username, onlineStatus}) {
    return(
        <div className="w-64 bg-white p-2 rounded">
            <img className="h-64 w-full object-cover" src={src}/>
            <div className="flex justify-between pt-1">
                <h1 className="ml-1">{username}</h1>
                <h1 className="">{onlineStatus}</h1>
            </div>
        </div>
    )
}