import React, { useEffect, useState } from 'react';
import styles from './HeroSlider.module.css';

const slides = [
  '/assets/hero1.jpg',
  '/assets/hero2.jpg',
  '/assets/hero3.jpg',
  '/assets/hero4.jpg',
  '/assets/hero5.jpg',
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        <div className={styles.progressRing}>
          {/* Progress ring implementation */}
        </div>
        <div className={styles.content}>
          {/* Typing animation for content */}
        </div>
      </div>
      <button className={styles.prev} onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        &#10094;
      </button>
      <button className={styles.next} onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        &#10095;
      </button>
    </div>
  );
};

export default HeroSlider;