import React, { useState } from 'react';

const Grid = ({ photos, handleDelete }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (id) => {
    setSelectedImage(id);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>Gallery</h1>
      <div className='grid'>
        {photos && photos.map(({ photo, _id }) => (
          <div key={_id} className="grid_item">
            <img
              src={`http://localhost:3000/uploads/${photo}`}
              alt="grid_image"
              onClick={() => handleClick(_id)} // Open image in modal on click
            />
            <button onClick={() => handleDelete(_id)} className="delete_button">Delete</button>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <img className="modal-content" src={`http://localhost:3000/uploads/${photos.find(p => p._id === selectedImage).photo}`} alt="modal_image" />
        </div>
      )}
    </div>
  );
};

export default Grid;
