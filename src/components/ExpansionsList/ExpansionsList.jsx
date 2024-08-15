
import { expansions } from '../../data/products'; 
import './ExpansionsList.css'; 

function ExpansionsList() {
  return (
    <div className="section-container dark-gradient-section">
      <div className="expansions-list">
        {expansions.map(expansion => (
          <div className="expansion-item" key={expansion.id}>
            <img src={expansion.image} alt={expansion.text} className="expansion-image" />
            <div className="expansion-text">{expansion.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpansionsList;
