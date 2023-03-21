import React, { useState } from 'react';
import '../components/styles/jobHistoryCard.css';
import $ from 'jquery';


function JobApplicationCard(props) {
  const { jobTitle, company, dateApplied, onDelete } = props;
  const [showModal, setShowModal] = useState(false);
  const [catGifUrl, setCatGifUrl] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    onDelete(); // delete card
  }

  const handleGotItClick = () => {
    handleCatGif(); // show modal with cat gif

  }

  const handleCatGif = () => {

    let giphyKey = "kOCxdNJFr0qRXkuqLrE3gNuSAIsYsHLW&q=";

    var catQueryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyKey + "funny+cat&limit=1&offset=0&rating=r&lang=en"
    $.ajax({
      "url": catQueryURL,
      "method": "GET"
    }).done(function (data) {
      setCatGifUrl(data.data[0].images.downsized.url);
      setShowModal(true);
    });
  }

  return (
    <div className="jobhistory-card">
      <h2>{jobTitle}</h2>
      <h3>{company}</h3>
      <p>{dateApplied}</p>
      <div className="uk-button-group">
        <button className="button" onClick={onDelete}>
          Didn't get the job
        </button>
        <button className="button" onClick={handleGotItClick}>
          I got it!
        </button>
      </div>
      {showModal && (
        <div className='modal-container'>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>Well done! Here's an amazing cat GIF for you:</p>
            <img src={catGifUrl} alt="cat GIF" />
          </div>
        </div>
      )}
    </div >
  );
}


export default JobApplicationCard;