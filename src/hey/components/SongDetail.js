import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    return (
        <div>
            {song&& song.title} 
            <br/>
            {song && song.duration}
        </div>
    )
}

const mapStateToProps=(state)=>{
  return { song:  state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
