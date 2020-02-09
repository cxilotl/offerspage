import React from 'react';
import cssStyles from './App.module.scss';

import Header from './containers/header/Header';
import RestaurantEntry from './components/restaurantEntry/RestaurantEntry';

function App() {
  return (
    <div className={ cssStyles.app }>
      <Header />
      <main className={ cssStyles.main }>
        <RestaurantEntry
          name={ `Benito's Hat` }
          description={ `Mexican . Burritos` }
          priceRange={ `£` }
        />
      </main>
    </div>
  );
}

export default App;