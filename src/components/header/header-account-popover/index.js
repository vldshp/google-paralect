import React from 'react';
import cn from 'classnames';

import avatarImg from '../../../assets/images/photo_2020-06-07 19.06.37.jpeg';
import accountAddIcon from '../../../assets/icons/person_add_alt_1-24px.svg';
import styles from './styles.module.css';

const HeaderAccountPopover = ({
  isAccountPopoverOpen,
  setIsAccountPopoverOpen,
}) => {
  return (
    <>
      <div
        className={cn(styles.account_popover_main__noclick_block, {
          [styles.account_popover_main__hidden]: !isAccountPopoverOpen,
        })}
        onClick={() => setIsAccountPopoverOpen(false)}
      />
      <div
        className={cn(styles.account_popover_main, {
          [styles.account_popover_main__hidden]: !isAccountPopoverOpen,
        })}
      >
        <img
          src={avatarImg}
          alt=""
          className={styles.account_popover_main__avatar}
        />
        <span className={styles.account_popover_main__account_name}>
          Владислав Шпаковский
        </span>
        <span className={styles.account_popover_main__account_email}>
          vladislavshpakovski@gmail.com
        </span>
        <a
          href="https://google.com/"
          className={styles.account_popover_main__account_button}
        >
          Управление аккаунтом Google
        </a>
        <a
          href="https://google.com/"
          className={styles.account_popover_main__account_add}
        >
          <img
            src={accountAddIcon}
            alt="add-account"
            className={styles.account_popover_main__account_add__icon}
          />
          Добавьте еще один аккаунт
        </a>
        <div className={styles.account_popover_main__account_logout__container}>
          <a
            href="https://google.com"
            className={styles.account_popover_main__account_logout}
          >
            Выйти
          </a>
        </div>
        <span className={styles.account_popover_main__additional_terms}>
          Политика конфиденциальности
        </span>
        <span className={styles.account_popover_main__additional_terms}>
          Условия использования
        </span>
      </div>
    </>
  );
};

export default HeaderAccountPopover;
