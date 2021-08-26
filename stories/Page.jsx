import React from 'react';
import PropTypes from 'prop-types';

// import { Header } from '../frontend/components/headers/Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    {/* <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} /> */}

    <section>
        <h1>Example page</h1>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
