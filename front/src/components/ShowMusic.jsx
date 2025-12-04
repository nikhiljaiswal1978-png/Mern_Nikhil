
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const ShowMusic = () => {

   
    const { id } = useParams()
    const [music, setMusic] = useState({})
    const navigate = useNavigate()
      useEffect(() => {
            axios.get(`http://localhost:4000/music/music/${id}`)
                .then((res) => setMusic(res.data))
                .catch((err) => console.log(err))
        }, [])
    
        const handleDelete = () => {
            axios.delete(`http://localhost:4000/music/${music._id}`)
                .then((res) => navigate('/'))
                .catch((err) => console.log(err))
        }
         return (
        <>
            <div
                className="container"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div className="card">
                        <img className="card-img-top" src={ music.image} alt={ music.album } height={400} width={300}/>
                        <div className="card-body">
                            <h2 className='card-title'> {music.album}</h2>
                            <h4 className="card-title">{ music.artist }</h4>
                            <h4 className="card-title">{ music.year }</h4>
                            <p className="card-text">{ music.genre }</p>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary me-2"
                                to="/"
                                role="button"
                            >Back</NavLink>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-warning me-2"
                                to={ `/edit/${music._id}` }
                                role="button"
                            >Edit</NavLink>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={ handleDelete }
                            >
                                Delete
                            </button>


                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}


export default ShowMusic
