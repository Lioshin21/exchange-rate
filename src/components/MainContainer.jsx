import React, { useEffect, useState } from "react";
import { getData } from "../api";
import { Audio } from "react-loader-spinner";
import Header from "./Header/Header";
import Rates from "./Rates/Rates";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  const [rates, setRates] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setError] = useState("");

  const getRates = async () => {
    try {
      setError("");
      const response = await getData();
      setRates(response);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  return (
    <main className={styles.main}>
      {isLoading && <Audio wrapperClass={styles.loader} />}
      {rates && !errorText && (
        <section>
          <Header rates={rates} />
          <Rates rates={rates} />
        </section>
      )}
      {errorText && (
        <div className={styles.error}>
          При завантаженні данних виникла помилка!
        </div>
      )}
    </main>
  );
};

export default MainContainer;
