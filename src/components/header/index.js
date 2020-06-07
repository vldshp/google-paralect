import React, { useState } from 'react';

import HeaderDrawer from './header-drawer';
import HeaderMenuPopover from './header-menu-popover';
import HeaderAccountPopover from './header-account-popover';

import menuIcon from '../../assets/icons/menu.svg';
import menuMobileIcon from '../../assets/icons/menu-mobile.svg';
import avatarImg from '../../assets/images/photo_2020-06-07 19.06.37.jpeg';
import styles from './styles.module.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuPopoverOpen, setIsMenuPopoverOpen] = useState(false);
  const [isAccountPopoverOpen, setIsAccountPopoverOpen] = useState(false);

  return (
    <header className={styles.header_main}>
      <div className={styles.header_main__menu_mobile}>
        <ul>
          <li>
            <img
              onClick={() => setIsDrawerOpen(true)}
              src={menuMobileIcon}
              alt="menu-mobile"
            />
          </li>
          <li>Все</li>
          <li>Картинки</li>
        </ul>
      </div>
      <div className={styles.header_main__menu}>
        <ul>
          <li className={styles.header_main__menu__item_mobile_hidden}>
            Почта
          </li>
          <li className={styles.header_main__menu__item_mobile_hidden}>
            Картинки
          </li>
          <li>
            <img
              src={menuIcon}
              alt="menu"
              className={styles.header_main__menu_icon}
              onClick={() => setIsMenuPopoverOpen(true)}
            />
          </li>
          <li>
            <img
              src={avatarImg}
              alt="avatar"
              className={styles.header_main__menu_avatar}
              onClick={() => setIsAccountPopoverOpen(true)}
            />
          </li>
        </ul>
      </div>
      <HeaderDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <HeaderMenuPopover
        isMenuPopoverOpen={isMenuPopoverOpen}
        setIsMenuPopoverOpen={setIsMenuPopoverOpen}
      />
      <HeaderAccountPopover
        isAccountPopoverOpen={isAccountPopoverOpen}
        setIsAccountPopoverOpen={setIsAccountPopoverOpen}
      />
    </header>
  );
};

export default Header;
