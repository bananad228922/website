import React from 'react';
import styles from './FlipTextHover.module.css';

export default function FlipTextHover({ text = '', flipTo = '', duration = 0.4 }) {
  const letters = text.split('');
  const altLetters = flipTo ? flipTo.split('') : letters;

  return (
    <div className={styles.flipTextContainer}>
      {letters.map((char, i) => (
        <span className={styles.flipLetterWrapper} key={i}>
          <span
            className={styles.flipLetter}
            style={{ transitionDuration: `${duration}s` }}
          >
            <span className={styles.front}>{char}</span>
            <span className={styles.back}>{altLetters[i] || char}</span>
          </span>
        </span>
      ))}
    </div>
  );
}