import styles from "./PopularRates.module.css";

const PopularRates = ({ rateEUR, rateUAH }) => {
  return (
    <div className={styles.rates__wrapper}>
      <div className={styles.rate}>
        <span>USD</span>
        <span>{rateUAH.toFixed(2)} ₴</span>
      </div>
      <div className={styles.rate}>
        <span>EUR</span>
        <span>{(rateUAH / rateEUR).toFixed(2)} ₴</span>
      </div>
    </div>
  );
};

export default PopularRates;
