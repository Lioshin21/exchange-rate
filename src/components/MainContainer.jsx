import React, { useEffect, useState } from "react";
import { getData } from "../api";
import Header from "./Header/Header";

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
  return <>{isLoading ? <div> Loading </div> : <Header rates={rates} />}</>;
};

export default MainContainer;
