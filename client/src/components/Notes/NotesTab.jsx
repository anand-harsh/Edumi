// src/components/notes/NotesTab.js
import React from 'react';
import Note from './Note';
import './Note.css';

const NotesTab = () => {
    // use absolute images just for demo notes
  const notesData = [
    { id: 1, title: 'HTML Notes', photo: 'https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj', websiteLink: 'https://www.w3schools.com/html/' },
    { id: 2, title: 'JavaScript', photo: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg', websiteLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { id: 1, title: 'Java', photo: 'https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile.png', websiteLink: 'https://www.oracle.com/in/java/' },
    { id: 2, title: 'Python', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', websiteLink: 'https://www.python.org/' },
    { id: 1, title: 'Note 1', photo: 'https://play-lh.googleusercontent.com/edQ8_8or0qX3JymcLz5jrHskKXLGjj7b7lGYuBW-oUMmK75vspumKniy6gukdOuzbcNl', websiteLink: 'https://go.dev/' },
    { id: 2, title: 'C++', photo: 'https://play-lh.googleusercontent.com/xRXmSJR3qZiXVboaZhDqhU9AQsvgefH6C7RQqamfLUwnSqmcOxu3yNkd7tND2V49gAM', websiteLink: 'https://cplusplus.com/doc/tutorial/' },
    { id: 1, title: 'HTML Notes', photo: 'https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj', websiteLink: 'https://www.w3schools.com/html/' },
    { id: 2, title: 'JavaScript', photo: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg', websiteLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { id: 1, title: 'Java', photo: 'https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile.png', websiteLink: 'https://www.oracle.com/in/java/' },
    { id: 2, title: 'Python', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png', websiteLink: 'https://www.python.org/' },
    { id: 1, title: 'Note 1', photo: 'https://play-lh.googleusercontent.com/edQ8_8or0qX3JymcLz5jrHskKXLGjj7b7lGYuBW-oUMmK75vspumKniy6gukdOuzbcNl', websiteLink: 'https://go.dev/' },
    { id: 2, title: 'C++', photo: 'https://play-lh.googleusercontent.com/xRXmSJR3qZiXVboaZhDqhU9AQsvgefH6C7RQqamfLUwnSqmcOxu3yNkd7tND2V49gAM', websiteLink: 'https://cplusplus.com/doc/tutorial/' },
    { id: 1, title: 'HTML Notes', photo: 'https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj', websiteLink: 'https://www.w3schools.com/html/' },
    { id: 2, title: 'JavaScript', photo: 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg', websiteLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { id: 1, title: 'Java', photo: 'https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile.png', websiteLink: 'https://www.oracle.com/in/java/' },
   
    // Add more notes as needed
  ];

  return (
    <div className="notes-tab">
      <h1>Notes</h1>
      <div className="notes-container">
        {notesData.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
};

export default NotesTab;
