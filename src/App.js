import React from 'react';
// import logo from './logo.svg';
import cssStyles from './App.module.scss';

import RestaurantEntry from './components/restaurantEntry/RestaurantEntry';

function App() {
  return (
    <div className={ cssStyles.app }>
      <header className={ cssStyles.header }>
       Big Header
      </header>
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

// function App() {
//   return (
//     <div className={ cssStyles.app }>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }