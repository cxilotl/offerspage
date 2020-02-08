import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './accountButton.module.scss';
import userIcon from "../../user-icon.svg";

const AccountButton = ()=> {
  return(
    <button id="account-btn" name="account-btn" data-testid="exchange-rate" className={ cssStyles.layout } type="button">
      <img src={ userIcon } className={ cssStyles.icon } alt="User icon" />
      <span className={ cssStyles.label }>Jane Smith</span>
    </button>
  );
};

export default AccountButton;