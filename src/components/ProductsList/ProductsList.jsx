import { singles } from '../../data/products';
import './ProductsList.css';

const getRandomCards = (cards, num) => {
  const shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function ProductsList() {
  const randomCards = getRandomCards(singles, 4);

  return (
    <div className="products-list">
      <div className="products-header">
        <h1>FEATURED PRODUCTS</h1>
        <h2>CERTIFIED GRADED</h2>
        <p>
        Invest, Collect, and Display! A certified graded Magic card is sealed in a plastic case to preserve its condition. The authenticity of the card is verified, the quality of the card is evaluated, and numerical grades are given and printed on its label. This is similar in process and effect to other graded collectibles like coins, comics, and sports cards. If you want a piece of Magic history to show off, its hard to beat a Certified Graded card!        </p>
        <button className="learn-button">VIEW ALL CERTIFIED GRADED</button>
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

export default ProductsList;
