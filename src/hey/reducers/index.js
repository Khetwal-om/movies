import { combineReducers } from 'redux'



const songsReducer =()=>{
    return [
        {
            title: 'Blinding lights',duration: '5:04'
        },
        {
            title: 'Red',duration: '4:28'
        },
        {
            title: 'Saturday Night',duration: '2:06'
        },
        {
            title: 'I Want it That Way',duration: '6:06'
        }
    ]
}

const selectedSongReducer =(selectedSong=null,action)=> {
    if(action.type==='SONG_SELECTED'){
        return action.payload
    } 
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})