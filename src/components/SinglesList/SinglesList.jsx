import { useState } from 'react';
import { singles } from '../../data/products.jsx';
import './SinglesList.css';

function SinglesList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, Math.ceil(singles.length / 6) - 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="singles-container">
      <ul className="singles-list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {singles.map(single => (
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
      <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
      <button onClick={handleNext} disabled={currentIndex === Math.ceil(singles.length / 6) - 1}>Next</button>
    </div>
  );
}

export default SinglesList;
