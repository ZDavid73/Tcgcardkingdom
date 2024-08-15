import { singles } from '../../data/products';
import './ProductsList.css';

const getRandomCards = (cards, num) => {
  const shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function ProductsList2() {
  const randomCards = getRandomCards(singles, 4);

  return (
    <div className="products-list">
      <div className="products-header">
        <h1>BUILD YOUR COMMANDER DECK</h1>
        <h2>COMMANDER CARDS</h2>
        <p>
          Commander is arguably the most popular format in Magic: The Gathering. Players build 100-card singleton decks helmed by a legendary creature (or commander) card that can be cast from a special zone called the Command Zone. Commander is a fun, casual, multiplayer format that allows players to express their creativity and draw from Magic´s rich history.
        </p>
        <button className="learn-button">LEARN ABOUT COMMANDER</button>
      </div>
      <div className="cards-container">
        {randomCards.map(card => (
          <div key={card.id} className="card-item">
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img src={card.image} alt={card.name} className="card-image" />
            </a>
            <div className="card-details">
              <span className="card-price">{card.price}</span>
              <span className="card-name">{card.name}</span>
              <span className="card-expansion">{card.expansion}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList2;
