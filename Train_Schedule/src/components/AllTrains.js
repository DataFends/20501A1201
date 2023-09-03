import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://20.244.56.144/train/trains')
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Display the fetched train data here */}
    </div>
  );
};

export default AllTrains;
