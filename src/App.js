import React from 'react';

import { Header, SearchForm, Footer } from './components';

import styles from './styles.module.css';

const App = () => (
  <div className={styles.app_main}>
    <Header />
    <SearchForm />
    <Footer />
  </div>
);

export default App;
