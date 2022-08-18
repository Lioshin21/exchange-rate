import React, { useEffect, useState } from "react";
import { getData } from "../api";
import Header from "./Header/Header";
import Rates from "./Rates/Rates";

const MainContainer = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setStatus] = useState(true);

  const getRates = () => {
    getData().then((res) => {
      setRates([res.conversion_rates]);
      setStatus(false);
    });
  };

  useEffect(() => {
    getRates();
  }, []);
  return (
    <>
      {isLoading ? (
        <div> Loading </div>
      ) : (
        <section>
          <Header rates={rates} />
           <Rates rates={rates} />
        </section>
      )}
    </>
  );
};

export default MainContainer;
