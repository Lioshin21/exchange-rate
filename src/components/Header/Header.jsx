import styles from "./Header.module.css";
import PopularRates from "./PopularRates/PopularRates";

const Header = ({ rates }) => {
  return (
    <header className={styles.header}>
      <PopularRates rateUAH={rates.UAH} rateEUR={rates.EUR} />
    </header>
  );
};

export default Header;
