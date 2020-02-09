import React from 'react';
import cssStyles from './Header.module.scss';
import logo from "../../logo-horizontal.svg";
import AccountButton from '../../components/accountButton/AccountButton';
import LocationWidget from '../../components/locationWidget/LocationWidget';

const Header = () => {
  const user = 'Jane Smith';
  const handleAccountBtnClicked = () => {
    console.log('Open Account');
  };
  return(
    <header className={ cssStyles.header }>
      <section className={ cssStyles.sectionMain }>
        <a href="/" className={ cssStyles.linkLogo }>
          <img src={ logo } className={ cssStyles.logo } alt="Deliveroo logo" />
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