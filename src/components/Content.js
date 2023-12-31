import React from 'react';
import '../styles/Content.css';
import Playlist from './Playlist';
import SearchResults from './SearchResults';

function Content({searchResults}) {
    return (
        <div className='content'>
            <SearchResults searchResults={searchResults} />
            <Playlist addedTracks={searchResults} />
        </div>
    )
}

export default Content;