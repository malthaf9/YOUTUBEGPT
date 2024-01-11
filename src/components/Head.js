import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'


const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch()

    //make an api call after every key press
        // but if the diff between 2 api calls is <200ms decline the api call
    useEffect(() => {
        const timer =  setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        //console.log(searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
        const json = await data.json();
        //console.log(json[1])
        setSuggestions(json[1])

        //update cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg bg-white justify-between dark:bg-zinc-900'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-12 cursor-pointer' alt='menu' src='https://th.bing.com/th/id/OIP.1bW-ON7QuRdA8rc_aZZ60AHaHa?rs=1&pid=ImgDetMain' />
                <a href='/'><img  className='h-12 px-2 w-45' alt='youtube-logo' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' /></a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {showSuggestions && (
                    <div className='z-[9] absolute bg-white w-[550px] border rounded-lg shadow-lg font-semibold mx-1 my-[2px]'>
                    <ul>
                        {suggestions.map((s) => (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>))}
                    </ul>
                </div>
                )}
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user-icon' src='https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png' />
            </div>
        </div>
    )
}

export default Head;