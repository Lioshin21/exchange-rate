import styles from "./Header.module.css";
import PopularRates from "./PopularRates/PopularRates";

const Header = ({ rates }) => {
  return (
    <header className={styles.header}>
      <h1>Exchange rate</h1>
      <PopularRates rateUAH={rates[0].UAH} rateEUR={rates[0].EUR} />
    </header>
  );
};

export default Header;
