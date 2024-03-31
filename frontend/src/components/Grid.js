import React from 'react'

const Grid = ({ photos }) => {
  return (
    <div>
      <h1>Gallery</h1>
      <div className='grid'>
        {photos && photos.map(({ photo, _id }) => (
          <div key={_id} className="grid_item">
            <img
              src={`http://localhost:3000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
