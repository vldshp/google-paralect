import React from 'react';
import cn from 'classnames';

import avatarImg from '../../../assets/images/photo_2020-06-07 19.06.37.jpeg';
import googleSearchIcon from '../../../assets/icons/google-search.svg';
import googleMapsIcon from '../../../assets/icons/google-maps.svg';
import youtubeIcon from '../../../assets/icons/youtube.svg';
import googlePlayIcon from '../../../assets/icons/google-play.svg';
import gmailIcon from '../../../assets/icons/gmail.svg';
import hangoutsIcon from '../../../assets/icons/hangouts-meet.svg';
import googleContactsIcon from '../../../assets/icons/google-contacts.svg';
import googleDriveIcon from '../../../assets/icons/google-drive.svg';
import styles from './styles.module.css';

const HeaderMenuPopover = ({ isMenuPopoverOpen, setIsMenuPopoverOpen }) => {
  return (
    <>
      <div
        className={cn(styles.menu_popover_main__noclick_block, {
          [styles.menu_popover_main__hidden]: !isMenuPopoverOpen,
        })}
        onClick={() => setIsMenuPopoverOpen(false)}
      />
      <div
        className={cn(styles.menu_popover_main, {
          [styles.menu_popover_main__hidden]: !isMenuPopoverOpen,
        })}
      >
        <div className={styles.menu_popover_main__item_section}>
          <img src={avatarImg} alt="avatar" />
          <span>Аккаунт</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={googleSearchIcon} alt="search" />
          <span>Поиск</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={googleMapsIcon} alt="maps" />
          <span>Карты</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={youtubeIcon} alt="youtube" />
          <span>YouTube</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={googlePlayIcon} alt="play" />
          <span>Play</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={gmailIcon} alt="gmail" />
          <span>Почта</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={hangoutsIcon} alt="hangouts" />
          <span>Meet</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={googleContactsIcon} alt="contacts" />
          <span>Контакты</span>
        </div>
        <div className={styles.menu_popover_main__item_section}>
          <img src={googleDriveIcon} alt="drive" />
          <span>Диск</span>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuPopover;
