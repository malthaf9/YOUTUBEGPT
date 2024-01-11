import React from "react";

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <img className="h-8" alt="icon" src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage