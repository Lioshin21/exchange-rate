import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import styles from "./Rates.module.css";

const Rates = ({ rates }) => {
  const [firstCurrencyValue, setFirstCurrencyValue] = useState(1);
  const [firstCurrencyName, setFirstCurrencyName] = useState("USD");

  const [secondCurrencyValue, setSecondCurrencyValue] = useState(1);
  const [secondCurrencyName, setSecondCurrencyName] = useState("USD");

  const isFirstSelectChange = (firstCurrencyName) => {
    setSecondCurrencyValue(
      (
        (firstCurrencyValue * rates[0][secondCurrencyName]) /
        rates[0][firstCurrencyName]
      ).toFixed(3)
    );
    setFirstCurrencyName(firstCurrencyName);
  };

  const isFirstInputChange = (firstCurrencyValue) => {
    setSecondCurrencyValue(
      (
        (firstCurrencyValue * rates[0][secondCurrencyName]) /
        rates[0][firstCurrencyName]
      ).toFixed(3)
    );
    setFirstCurrencyValue(firstCurrencyValue);
  };

  const isSecondSelectChange = (secondCurrencyName) => {
    setFirstCurrencyValue(
      (
        (secondCurrencyValue * rates[0][firstCurrencyName]) /
        rates[0][secondCurrencyName]
      ).toFixed(3)
    );
    setSecondCurrencyName(secondCurrencyName);
  };

  const isSecondInputChange = (secondCurrencyValue) => {
    setFirstCurrencyValue(
      (
        (secondCurrencyValue * rates[0][firstCurrencyName]) /
        rates[0][secondCurrencyName]
      ).toFixed(3)
    );
    setSecondCurrencyValue(secondCurrencyValue);
  };

  useEffect(() => {
    isFirstInputChange(1);
  }, [firstCurrencyName, secondCurrencyName]);

  return (
    <div className={styles.forms__container}>
      <Form
        rates={rates}
        currentName={firstCurrencyName}
        setCurrencyName={isFirstSelectChange}
        currentValue={firstCurrencyValue}
        setCurrencyValue={setFirstCurrencyValue}
        onInputChange={isFirstInputChange}
      />
      <Form
        rates={rates}
        currentName={secondCurrencyName}
        setCurrencyName={isSecondSelectChange}
        currentValue={secondCurrencyValue}
        setCurrencyValue={setFirstCurrencyValue}
        onInputChange={isSecondInputChange}
      />
    </div>
  );
};

export default Rates;
