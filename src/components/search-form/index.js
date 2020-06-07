import React from 'react';

import logo from '../../assets/icons/logo.svg';
import googleVoiceIcon from '../../assets/icons/google-voice.svg';
import searchIcon from '../../assets/icons/search.svg';
import styles from './styles.module.css';

const SearchForm = () => {
  return (
    <main className={styles.search_form_main}>
      <img src={logo} alt="" />
      <div className={styles.search_form_main__search_bar_container}>
        <img
          className={styles.search_form_main__img_search}
          src={searchIcon}
          alt="voice-search"
        />
        <input
          className={styles.search_form_main__input}
          type="text"
          title="Search"
        />
        <a href="https://google.com/">
          <img
            className={styles.search_form_main__img_voice}
            src={googleVoiceIcon}
            alt="voice-search"
          />
        </a>
      </div>
      <div className={styles.search_form_main__search_buttons_container}>
        <a
          href="https://google.com/"
          className={styles.search_form_main__search_button}
        >
          Поиск в Google
        </a>
        <a
          href="https://google.com/"
          className={styles.search_form_main__search_button}
        >
          Мне повезёт!
        </a>
      </div>
      <div className={styles.search_form_main__additional_info}>
        <span>Сервисы Google доступны на разных языках: </span>
        <span>English</span> <span>Беларуская</span>
      </div>
    </main>
  );
};

export default SearchForm;
