
'use client'

import { Searchbar } from './searchbar';
import { Albumlist } from './albums';
import { Scrollsection } from './scrollsections';
import { useContext } from 'react';
import {PlaylistContext} from '../Context/playerlistcontext';
export const Playlist = () => {
    const { playlistData, loading } = useContext(PlaylistContext);
    // console.log(loading,'loading')
    // console.log("playlistData:", playlistData);
    if (loading) return <div>Loading...</div>; 

    return (
        <div className="flex flex-col px-5 items-start pt-5 text-white h-screen w-full">
            <Searchbar />
            {/* <Scrollsection Component={Albumlist} Heading='Album' value={playlistData.album}/>
            <Scrollsection Component={Albumlist} Heading='Artist' value ={playlistData.artists}/> */}
            <Scrollsection Component={Albumlist} Heading='Song' value ={playlistData.song}/>
        </div>
    );
};
