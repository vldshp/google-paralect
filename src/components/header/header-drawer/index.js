import React from 'react';
import cn from 'classnames';

import logo from '../../../assets/icons/logo.svg';
import homeIcon from '../../../assets/icons/home_icon.svg';
import activityIcon from '../../../assets/icons/search_activity_icon.svg';
import saveIcon from '../../../assets/icons/save_icon.svg';
import settingsIcon from '../../../assets/icons/settings_icon.svg';
import privacyIcon from '../../../assets/icons/privacy_advisor_icon.svg';
import howSearchIcon from '../../../assets/icons/how_search_works_icon.svg';
import helpIcon from '../../../assets/icons/help_icon.svg';
import feedbackIcon from '../../../assets/icons/feedback_icon.svg';

import styles from './styles.module.css';

const HeaderDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <>
      <div
        className={cn(styles.drawer_main__opacity_block, {
          [styles.drawer_main__hidden]: !isDrawerOpen,
        })}
        onClick={() => setIsDrawerOpen(false)}
      />
      <aside
        className={cn(styles.drawer_main, {
          [styles.drawer_main__hidden]: !isDrawerOpen,
        })}
      >
        <ul>
          <li className={styles.drawer_main__logo_container}>
            <img src={logo} alt="drawer" />
          </li>
          <li onClick={() => setIsDrawerOpen(false)}>
            <img src={homeIcon} alt="home" />
            Главная страница
          </li>
          <li>
            <img src={activityIcon} alt="drawer" />
            Действия в Поиске
          </li>
          <li>
            <img src={saveIcon} alt="drawer" />
            Подборки
          </li>

          <li className={styles.drawer_main__divider} />

          <li>
            <img src={settingsIcon} alt="drawer" />
            Настройки
          </li>
          <li>
            <img src={privacyIcon} alt="drawer" />
            Ваши данные в Поиске
          </li>
          <li>
            <img src={howSearchIcon} alt="drawer" />
            Как работает Google Поиск
          </li>
          <li>
            <img src={helpIcon} alt="drawer" />
            Справка
          </li>
          <li>
            <img src={feedbackIcon} alt="drawer" />
            Отправить отзыв
          </li>
        </ul>
      </aside>
    </>
  );
};

export default HeaderDrawer;
