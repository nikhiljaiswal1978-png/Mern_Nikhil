import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditMusic = () => {
      const { id } = useParams()
      const [music, setMusic] = useState({})
      const navigate = useNavigate()
     useEffect(() => {
    axios.get(`http://localhost:4000/music/music/${id}`)
      .then((res) => setMusic(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/music/${id}`, music)
      .then(() => navigate(`/`))
      .catch((err) => console.log(err))
  }

  return (
 <div>
      <div
        class="container"
      >
        <div
          class="row justify-content-center align-items-center g-2"
        >
          <div class="col">
            <div class="card text-start">

              <div class="card-body">
                <h4 class="card-title">Edit Music</h4>
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      
                      id="formId1"
                      placeholder=""
                      value={music.album}
                      onChange={(e) => setMusic({ ...music, album: e.target.value })}

                    />
                    <label for="formId1">Album</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      
                      id="formId1"
                      placeholder=""
                      value={music.artist}
                      onChange={(e) => setMusic({ ...music, artist: e.target.value })}

                    />
                    <label for="formId1">Artist</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      
                      id="formId1"
                      placeholder=""
                      value={music.year}
                      onChange={(e) => setMusic({ ...music, year: e.target.value })}

                    />
                    <label for="formId1">Year</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      
                      id="formId1"
                      placeholder=""
                      value={music.image}
                      onChange={(e) => setMusic({ ...music, image: e.target.value })}

                    />
                    <label for="formId1">Image Url</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name={music.author}
                      id="formId1"
                      placeholder=""
                      value={music.genre}
                      onChange={(e) => setMusic({ ...music, genre: e.target.value })}

                    />
                    <label for="formId1">Genre</label>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-warning"
                  >
                    Edit
                  </button>

                </form>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
export default EditMusic
