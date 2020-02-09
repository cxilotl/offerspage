import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './AccountButton.module.scss';
import userIcon from "../../user-icon.svg";

const AccountButton = ({ userName, onCLick })=> {
  return(
    <button id="account-btn" name="account-btn"
            data-testid="account-button" className={ cssStyles.layout }
            type="button" onClick={ onCLick }>
      <img src={ userIcon } className={ cssStyles.icon } alt="User icon" />
      <span className={ cssStyles.label }>{ userName }</span>
    </button>
  );
};

AccountButton.propTypes = {
  userName: PropTypes.string,
  onCLick: PropTypes.func
};

export default AccountButton;