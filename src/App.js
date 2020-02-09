import React from 'react';
import logo from './logo-horizontal.svg';
import cssStyles from './App.module.scss';

import AccountButton from './components/accountButton/accountButton';
import RestaurantEntry from './components/restaurantEntry/RestaurantEntry';

function App() {
  const user = 'Jane Smith';
  const handleAccountBtnClicked = () => {
    console.log('Open Account');
  };

  return (
    <div className={ cssStyles.app }>
      <header className={ cssStyles.header }>

        <section className={ cssStyles['header-main'] }>
          <a href="/" className={ cssStyles['header-logo-link'] }>
            <img src={ logo } className={ cssStyles.logo } alt="Deliveroo logo" />
          </a>
          <AccountButton userName={ user } onCLick={ handleAccountBtnClicked } />
        </section>

        <section className={ cssStyles['header-location'] }>
          <div className={ cssStyles.locationInfo }>
            <span className={ cssStyles.locationLabel }>Location</span>
            <span className={ cssStyles.selectedLocation }>Fritzovia</span>
          </div>
          <button id="locationUpdate" name="locationUpdate" className={ cssStyles['location--btn'] } type="button">
            Change Location
          </button>
        </section>

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