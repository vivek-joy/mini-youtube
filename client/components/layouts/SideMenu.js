import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import css from './layouts.module.scss';
import home from '../../assets/images/sidemenu/home.png';
import userGroup from '../../assets/images/sidemenu/user_group.png';
import user from '../../assets/images/user.png';

import Upload from '../../assets/images/sidemenu/upload_to_cloud.png';
import History from '../../assets/images/sidemenu/time_machine.png';

const SideMenu = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className={css['sidebar-container']}>
      <ul>
        <Link href="/">
          <li
            className={`${css['nav-item']} ${
              pathname === '/' ? css.active : ''
            }`}
          >
            <img src={home} alt="home navigation link" />
            <p>Home</p>
          </li>
        </Link>

        <Link href="/channels">
          <li
            className={`${css['nav-item']} ${
              pathname === '/channels' ? css.active : ''
            }`}
          >
            <img src={userGroup} alt="channels navigation link" />
            <p>Channels</p>
          </li>
        </Link>

        <Link href="/upload">
          <li className={`${css['nav-item']}`}>
            <img src={Upload} alt="upload navigation link" />
            <p>Upload Video</p>
          </li>
        </Link>

        <Link href="/history">
          <li className={`${css['nav-item']}`}>
            <img src={History} alt="history navigation link" />
            <p>History</p>
          </li>
        </Link>

        <hr color="#333" />

        {/* Subscriptions */}

        <h5 style={{ padding: '12px', paddingBottom: '8px' }}>SUBSCRIPTIONS</h5>

        <li className={`${css['nav-item']}`}>
          <img
            src={user}
            style={{ width: '32px', height: '32px' }}
            alt="channel user avatar"
          />
          <p>Channel 1</p>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
