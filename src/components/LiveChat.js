import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";



const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')

  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling 
      console.log('API Polling')

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20)
      }))

    }, 2000);

    return () => clearInterval(i)

  }, [])

  return (
    <>
      <div className="ml-2 w-full h-[600px] p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg border border-black overflow-y-scroll flex-col-reverse">
        <h1 className="font-bold border-b-2 border-black p-2">Live Chat</h1>
        <div className="items-center p-2 shadow-md rounded-md dark:bg-zinc-900">
          {chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />))}
        </div>
      </div>

      <form className="w-full p-2 ml-2 border border-black rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: 'Althaf Hussain',
            message: liveMessage
          }))
          setLiveMessage('')
        }} >
        <input className="w-75 border border-black rounded-lg py-1 px-2 dark:bg-zinc-700" placeholder="Write your comment here" type="text" value={liveMessage} onChange={(e) => { setLiveMessage(e.target.value) }} />
        <button className="px-2 mx-2 bg-green-200 rounded-3xl dark:bg-green-900">Send</button>
      </form>

    </>
  )
}

export default LiveChat