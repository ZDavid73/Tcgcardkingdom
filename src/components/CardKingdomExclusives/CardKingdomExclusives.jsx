import { useState } from 'react';
import './CardKingdomExclusives.css';
import { singles } from '../../data/products';

function CardKingdomExclusives() {
  const [displayedProducts] = useState(getRandomProducts());

  function getRandomProducts() {
    const shuffled = [...singles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }

  return (
    <div className="exclusives-section">
      <h3 className="subtitle">FUN PRODUCTS YOU CAN ONLY FIND AT CARD KINGDOM</h3>
      <h2 className="title">CARD KINGDOM EXCLUSIVES</h2>

      <div className="products-grid">
        {displayedProducts.map((product) => {
          const numericPrice = parseFloat(product.price.replace('$', ''));
          return (
            <div key={product.id} className="product-card">
              <div className="slider-item-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p className="product-price">${numericPrice.toFixed(2)}</p>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-expansion">{product.expansion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardKingdomExclusives;
