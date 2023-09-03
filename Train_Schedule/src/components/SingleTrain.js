import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleTrain = ({ match }) => {
  const [train, setTrain] = useState(null);
  const trainId = match.params.id; // Get the train ID from the URL parameter

  useEffect(() => {
    // Fetch data for a single train from the API
    axios.get(`http://20.244.56.144/train/trains/${trainId}`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [trainId]);

  return (
    <div>
      {train ? (
        <div>
          <h1>Train Details</h1>
          {/* Display the fetched train details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;
