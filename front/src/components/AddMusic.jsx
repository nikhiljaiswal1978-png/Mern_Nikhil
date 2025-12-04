import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddMusic = () => {
    const[musicData,setData]=useState({album:'',
    artist:'',
    year:'',
    genre:'',
    image:''})
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:4000/music/add`,musicData)
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err)
        )
    }
  return (
    <div>
      <div
        class="container"
      >
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <form onSubmit={handleSubmit}>
<div class="col">
    <div class="form-floating mb-3">
        <input
            type="text"
            class="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            onChange={(e)=>setData({...musicData,album:e.target.value})}
        />
        <label for="formId1"> Music Name</label></div>
        <div class="form-floating mb-3">
            <input
                type="text"
                class="form-control"
                name="formId1"
                id="formId1"
                placeholder=""
                     onChange={(e)=>setData({...musicData,artist:e.target.value})}
       
            />
            <label for="formId1">Artist</label></div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                         onChange={(e)=>setData({...musicData,year:e.target.value})}
       
                />
                <label for="formId1">Release Year</label>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                         onChange={(e)=>setData({...musicData,genre:e.target.value})}
       
                />
                <label for="formId1">Genre</label>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                         onChange={(e)=>setData({...musicData,image:e.target.value})}
       
                />
                <label for="formId1">Cover Image</label>
            </div>    
          <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Add Music
                            </button>
                            
        
    </div>
    
                
                </form>
            </div>
         
        </div>
        
      
    </div>
  )
}

export default AddMusic
