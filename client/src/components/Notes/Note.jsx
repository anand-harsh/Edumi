// src/components/notes/Note.js
import React from 'react';

const Note = ({ title, photo, websiteLink }) => {
  return (
    <div className="note">
      <img src={photo} alt={title} className="note-image" />
      <h3>{title}</h3>
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default Note;
