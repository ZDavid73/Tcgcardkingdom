import { NavBar, NavBar2, ExpansionsList, SinglesList, ProductsList, ProductsList2, CardKingdomExclusives, CardKingdomExclusives2 } from './components/index';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <div className="the-hero">
        <div className="image-wrapper">
          <img 
            src="https://images.contentstack.io/v3/assets/blt7f520a21793912be/blta35804b391d80144/66ad02b30e9ffedb3e04784f/BLB_Hero_Release_1.jpg?format=webply&quality=70&width=1520" 
            alt="Hero" 
            className="hero-image" 
          />
        </div>
      </div>
      <main>
<ExpansionsList></ExpansionsList>
<SinglesList></SinglesList>
<ProductsList2></ProductsList2>
<CardKingdomExclusives></CardKingdomExclusives>
<ProductsList></ProductsList>
<CardKingdomExclusives2></CardKingdomExclusives2>
      </main>
    </div>
  );
}

export default App;
