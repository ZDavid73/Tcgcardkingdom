import { useState, useEffect } from 'react';
import { singles } from '../../data/products.jsx';
import './SinglesList.css';

function getRandomSubset(array, size) {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

function SinglesList() {
  const [currentSubset, setCurrentSubset] = useState(getRandomSubset(singles, 6));

  const handleNext = () => {
    setCurrentSubset(getRandomSubset(singles, 6));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="singles-container">
      <h2 className="singles-title">TRENDING NOW</h2>
      <div className="singles-footer">
        <span>Singles</span>
        <span>Sealed Supplies</span>
        <span>Hot Buy List</span>
      </div>  
      <ul className="singles-list">
        {currentSubset.map(single => (
          <li key={single.id} className="single-item">
            <a href={single.link} target="_blank" rel="noopener noreferrer">
              <img src={single.image} alt={single.name} className="single-image" />
            </a>
            <div className="single-details">
              <span className="single-price">{single.price}</span>
              <span className="single-name">{single.name}</span>
              <span className="single-expansion">{single.expansion}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SinglesList;
