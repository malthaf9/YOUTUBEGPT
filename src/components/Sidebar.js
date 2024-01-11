import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArchive, FaClock, FaFireAlt, FaGamepad, FaHistory, FaHome, FaMusic, FaPlay, FaPodcast, FaShoppingBag, FaThumbsUp, FaTrophy, FaYoutube } from 'react-icons/fa'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if (!isMenuOpen) return null;
    
    return (
        <div className="p-8 pt-3 shadow-lg w-48 bg-white relative dark:bg-zinc-900">
            <ul>
                <li className="py-3 font-bold cursor-pointer"><Link className="flex" to='/'><i className="mt-1 px-3"><FaHome /></i>Home</Link></li>  
                <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaPlay /></i>Shorts</li>
                <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaArchive /></i>Subscriptions</li>
            </ul>
            <hr />

            <ul>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaPlay /></i>Library</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaHistory /></i>History</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaYoutube /></i>Your Videos</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaClock /></i>Watch later</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaThumbsUp /></i>Liked Videos</li>
            </ul>
            <hr />

            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaFireAlt /></i>Trending</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaShoppingBag /></i>Shopping</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaMusic /></i>Music</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaPodcast/></i>Live</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaGamepad /></i>Gaming</li>
            <li className="flex py-3 font-bold cursor-pointer"><i className="mt-1 px-3"><FaTrophy /></i>Sports</li>
            </ul>
            
        </div>
    )
}

export default Sidebar