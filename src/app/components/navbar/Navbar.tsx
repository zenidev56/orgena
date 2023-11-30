"use client"; // This is p client component 👈🏽

// components/Navbar.js
import { useState } from 'react';

import Logo from '/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from './navbar.module.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const router = useRouter();

  return (
    <>
    <div className={styles.mainHeader}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer} >
          <Link href="#" className={styles.logoLink}>
            <div className={styles.logo} >
              <Image src={Logo} alt='Logo' />
            </div>
            <p className={styles.logoName}>Care Physiotherapy</p>
          </Link>
        </div>
      </div>
      <ul className={styles.contactContainer}>
        <li className={styles.siteContact} onClick={() => router.push(`/call/+917738715012`)}>
          <i className={`fa-solid fa-phone ${styles.iconColor}`}></i>
          <div>
            <p>Free Call</p>
            <p>+91 7738715012</p>
          </div>
        </li>
        <li className={styles.siteContact} >
        <i className={`fa-solid fa-clock ${styles.iconColor}`}></i>
          <div>
            <p>drjuliepawar@gmail.com</p>
            <p>Visit us Daily 9.00 AM - 9.00 PM</p>
          </div>
        </li>
        <li className={styles.siteContact}>
        <i className={`fa-solid fa-location-dot ${styles.iconColor}`}></i>
          <div>
            <p>Address Center</p>
            <p>Ramdev Park,Mira Road,401107 </p>
          </div>
        </li>
      </ul>
      <div className={styles.mobileMenu} onClick={handleClick}>
        <div className={styles.menuIcon} >
          {click ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </div>
    <div className={styles.secondaryHeader}>
      <div>
        <ul className={` ${styles.actionLinks} ${click ? styles.active: ''}`}>
          <li className={styles.actionLinksContainer}>
            <li className={styles.option} onClick={closeMobileMenu}>
              <a href="#">Home</a>
            </li>
            <li className={styles.option} onClick={closeMobileMenu}>
              <a href="#">About Us</a>
            </li>
            <li className={styles.option} onClick={closeMobileMenu}>
              <a href="#">Services</a>
            </li>
            <li className={`${styles.option}`} onClick={closeMobileMenu}>
              <a href="#">Case Studies</a>
            </li>
            <li className={`${styles.option}`} onClick={closeMobileMenu}>
              <a href="#">SIGN-IN</a>
            </li>
            <li className={`${styles.option} `} onClick={closeMobileMenu}>
              <a href="#">Testinomials</a>
            </li>
          </li>
          <li  className={`${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <button className={styles.appointmentBtn}>
              Make an Appointment Today
            </button>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
