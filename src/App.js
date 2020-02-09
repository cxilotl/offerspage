import React from 'react';
import cssStyles from './App.module.scss';

import Header from './containers/header/Header';
import RestaurantList from './containers/restaurantList/RestaurantList';

function App() {
  return (
    <div className={ cssStyles.app }>
      <Header />
      <main className={ cssStyles.main }>
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;