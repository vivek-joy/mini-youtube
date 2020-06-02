/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './layouts.module.scss';
import menu from '../../assets/images/menu.png';
import search from '../../assets/images/search.png';
import notification from '../../assets/images/notification.png';
import email from '../../assets/images/email.png';
import add from '../../assets/images/add_outlined.png';
import user from '../../assets/images/user.png';

import Input from '../shared/Input';

const AppBar = () => {
  const [showDropdown, setShowDropdown] = useState('');

  const toggleDropdown = (dropdownName) => {
    if (showDropdown === dropdownName) {
      setShowDropdown('');
    } else {
      setShowDropdown(dropdownName);
    }
  };
  return (
    <div className={css['appbar-container']}>
      <div className={css.brand}>
        <img src={menu} alt="menu" />
        <div className={`logo ${css.small}`}>MT</div>
        <span>mini yt</span>
      </div>

      <div className={css['search-container']}>
        <Input inputClass={css['search-input']} placeholder="Search for..." />
        <div className={css.icon}>
          <img src={search} alt="search icon" />
        </div>
      </div>

      <div className={css['appbar-right']}>
        <div>
          <img src={add} alt="upload video" />
          <span>Upload Video</span>
        </div>
        <div className={css.icon}>
          <img src={notification} alt="notification" />
        </div>

        <div
          onClick={() => toggleDropdown('email')}
          onKeyPress={() => {}}
          className={css.icon}
        >
          <img src={email} alt="email icon" />
          <CSSTransition
            in={showDropdown === 'email'}
            classNames={{
              enter: css.dropdownEnter,
              enterActive: css.dropdownEnterActive,
              exit: css.dropdownExit,
              exitActive: css.dropdownExitActive,
            }}
            timeout={350}
            unmountOnExit
          >
            <div className={css.dropdown}>
              <ul>
                <li>My Account</li>
                <li>Subsctiptions</li>
                <li>Setings</li>
              </ul>
            </div>
          </CSSTransition>
        </div>

        <div
          onKeyPress={() => {}}
          onClick={() => toggleDropdown('account')}
          className={css.account}
        >
          <img src={user} alt="user avatar" />
          <div>Username</div>
          <CSSTransition
            in={showDropdown === 'account'}
            classNames={{
              enter: css.dropdownEnter,
              enterActive: css.dropdownEnterActive,
              exit: css.dropdownExit,
              exitActive: css.dropdownExitActive,
            }}
            timeout={350}
            unmountOnExit
          >
            <div className={css.dropdown}>
              <ul>
                <li>My Account</li>
                <li>Subsctiptions</li>
                <li>Setings</li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
