import React from 'react';
import cssStyles from './Header.module.scss';
import logo from "../../logo-horizontal.svg";
import AccountButton from '../../components/accountButton/AccountButton';
import LocationWidget from '../../components/locationWidget/LocationWidget';

const Header = () => {
  const user = 'Jane Smith';
  const handleAccountBtnClicked = () => {
    console.log('Open Account'); // eslint-disable-line no-console
  };
  return(
    <header className={ cssStyles.header }>
      <section className={ cssStyles.sectionMain }>
        <a href="/" className={ cssStyles.linkLogo }>
          <h1>
            <img src={ logo } className={ cssStyles.logo } alt="Deliveroo logo" />
          </h1>
        </a>
        <AccountButton userName={ user } onCLick={ handleAccountBtnClicked } />
      </section>

      <section className={ cssStyles.sectionLocation }>
        <LocationWidget />
      </section>
    </header>
  );
};

export default Header;