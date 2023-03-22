import React, { useState, useEffect } from 'react';
import '../components/styles/jobHistoryCard.css';
import $ from 'jquery';
import Confetti from 'react-confetti';



function JobApplicationCard(props) {
  const { jobTitle, company, dateApplied, onDelete } = props;
  const [showModal, setShowModal] = useState(false);
  const [catGifUrl, setCatGifUrl] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);


  const handleCloseModal = () => {
    setShowModal(false);
    onDelete(); // delete card
  }

  const handleGotItClick = () => {
    setShowConfetti(true); // show confetti
  }

  useEffect(() => {
    let timer = null;
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false);
        onDelete(); // delete card
      }, 15000);// stop confetti after 5 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showConfetti, onDelete]);


  const notGotItClick = () => {
    handleCatGif(); // show modal with cat gif

  }

  const handleCatGif = () => {

    let giphyKey = "kOCxdNJFr0qRXkuqLrE3gNuSAIsYsHLW&q=";

    var catQueryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyKey + "funny+cat&limit=100&offset=0&rating=r&lang=en"
    $.ajax({
      "url": catQueryURL,
      "method": "GET"
    }).done(function (data) {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const randomCatGifUrl = data.data[randomIndex].images.downsized.url;
      setCatGifUrl(randomCatGifUrl);
      setShowModal(true);
    });
  }

  return (
    
    <div className="jobhistory-card">
            {showConfetti && <Confetti width={window.innerWidth} height={1400} />}

      <h2>{jobTitle}</h2>
      <h3>{company}</h3>
      <p>{dateApplied}</p>
      <div className="uk-button-group">
        <button className="button" onClick={notGotItClick}>
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
            <h1>Don't be sad!</h1> <p>Here's a funny cat for you. You rock!</p>
            <img src={catGifUrl} alt="cat GIF" />
          </div>
        </div>
        
      )}
    </div >
    
  );
}


export default JobApplicationCard;