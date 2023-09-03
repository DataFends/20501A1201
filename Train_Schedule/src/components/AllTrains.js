import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const [sortedTrains, setSortedTrains] = useState([]);
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://20.244.56.144/train/trains')
      .then((response) => {
        setTrains(response.data);
        // Sort trains based on your criteria (ascending price, descending tickets, etc.)
        const sorted = response.data.sort((a, b) => {
          // Add your sorting logic here
        });
        setSortedTrains(sorted);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
    // Filter the sorted trains based on user input (e.g., train name, destination)
    const filtered = sortedTrains.filter((train) =>
      train.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedTrains(filtered);
  };

  return (
    <div>
      <h1>All Trains</h1>
      <input
        type="text"
        placeholder="Filter by train name..."
        value={filterBy}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedTrains.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.departureTime}</td>
              <td>{train.price}</td>
              {/* Add more table data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrains;
