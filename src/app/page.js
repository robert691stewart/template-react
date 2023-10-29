'use client'
import Image from 'next/image'
import confetti from 'canvas-confetti';

import styles from './page.module.css'

import { useEffect } from 'react';

export default function Home() {

  function handleConfetti(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    confetti({
      origin: { x, y }
    });
  }

  useEffect(() => {
    document.addEventListener('click', handleConfetti);
    confetti();
    return () => {
      document.removeEventListener('click', handleConfetti);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.flares}>
        
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>RobertFlo</span>
            <span className={styles.titleText}>Deployment</span>
          </h1>

          

          <div className={styles.grid}>
            <a href="Projects" className={styles.card}a/>
        
        </div>
      </div>
    </div>
  </div>
  )
}
