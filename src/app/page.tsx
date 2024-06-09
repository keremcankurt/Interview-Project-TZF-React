"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [buttons, setButtons] = useState<boolean[]>(Array(9).fill(false));
  const [history, setHistory] = useState<number[]>([]);
  
  const onBackButtonClick = () => {
    if (history.length > 0) {
    setHistory((prevHistory) => {
      if (prevHistory.length === 0) return prevHistory;
      return prevHistory.slice(0, -1);
    });
    
      const lastAction = history[history.length - 1];
      setButtons((prevButtons) => {
        const newButtons = [...prevButtons];
        newButtons[lastAction] = !newButtons[lastAction];
        return newButtons;
      });
    }else {
      alert("Geri alınacak bir hamle yok.");
    }
  };

  const onSquareClick = (index: number) => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[index] = !newButtons[index];
      return newButtons;
    });

    setHistory((prevHistory) => [...prevHistory, index]);
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <button 
            key={index} 
            className={styles.squareButton} 
            onClick={() => onSquareClick(index)}
          >
            {buttons[index] ? 'X' : ''}
          </button>
        ))}
      </div>
    </main>
  );
}
