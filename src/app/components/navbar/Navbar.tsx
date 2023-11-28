"use client"; // This is p client component 👈🏽

// components/Navbar.js
import { useState } from 'react';

import Logo from '/public/logo.png';
import MenuIcon from '/public/menu.svg';
import CloseMenu from '/public/x.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from './navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoNav}>
        <div className={styles.logoContainer} >
          <Link href="#" className={styles.logoLink}>
            <div className={styles.logo} >
              <Image src={Logo} alt='Logo' />
            </div>
            <p>Care Physiotherapy</p>
          </Link>
        </div>
        <ul className={` ${styles.navOptions} ${click ? styles.active: ''}`}>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
          <li className={`${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li  className={`${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="" className={styles.signUp}>
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.signinUp}>
        <li className={styles.signIn} onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className={styles.signupBtn}>
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className={styles.mobileMenu} onClick={handleClick}>
        <div className={styles.menuIcon} >
          {click ? (
            <Image src={CloseMenu} alt='close icon' />
          ) : (
            <Image src={MenuIcon} alt='open icon' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
