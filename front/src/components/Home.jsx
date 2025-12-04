import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [musics,setMusic]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/music`)
        .then((res)=>setMusic(res.data))
        .catch((err)=>console.log(err)
        )
    },[])

  return (
    <div>
        <div
            class="container"
        >
            <div
                class="row justify-content-center align-items-center g-2"
            >
               {
                musics.map((music)=>(
<div
    class="col-4      "
>
    <div class="card">
        <img class="card-img-top" src={music.image} alt={music.album} />
        <div class="card-body">
            
            <h4 class="card-title">{music.album}</h4>
            <h6 class="card-title">Artist: {music.artist}</h6>
            <p class="card-text">Year: {music.year} ,Genre:
   {music.genre} </p>
   
  <NavLink
                                    className="btn btn-primary"
                                    to={`/${music._id}`}
                                    role="button"
                                    >Read More</NavLink>
                                
                            
        </div>
    </div>
    
    
</div>

                ))
               }
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Home
