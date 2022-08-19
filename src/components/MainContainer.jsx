import React, { useEffect, useState } from "react";
import { getData } from "../api";
import { Audio } from  'react-loader-spinner'
import Header from "./Header/Header";
import Rates from "./Rates/Rates";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  const [rates, setRates] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setError] = useState("");

  const getRates = async () => {
    try {
      const response = await getData();
      if (typeof response === "string") {
        throw Error(response);
      }
      setRates(response);
    } catch (error) {
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
      {isLoading && <Audio />}
      {rates && (
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
