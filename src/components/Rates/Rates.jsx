import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import styles from "./Rates.module.css";

const Rates = ({ rates }) => {
  const [firstCurrencyValue, setFirstCurrencyValue] = useState(1);
  const [firstCurrencyName, setFirstCurrencyName] = useState("USD");

  const [secondCurrencyValue, setSecondCurrencyValue] = useState(1);
  const [secondCurrencyName, setSecondCurrencyName] = useState("USD");

  const onFirstSelectChange = (firstCurrencyName) => {
    setSecondCurrencyValue(
      (
        (firstCurrencyValue * rates[secondCurrencyName]) /
        rates[firstCurrencyName]
      ).toFixed(3)
    );
    setFirstCurrencyName(firstCurrencyName);
  };

  const onFirstInputChange = (firstCurrencyValue) => {
    setSecondCurrencyValue(
      (
        (firstCurrencyValue * rates[secondCurrencyName]) /
        rates[firstCurrencyName]
      ).toFixed(3)
    );
    setFirstCurrencyValue(firstCurrencyValue);
  };

  const onSecondSelectChange = (secondCurrencyName) => {
    setFirstCurrencyValue(
      (
        (secondCurrencyValue * rates[firstCurrencyName]) /
        rates[secondCurrencyName]
      ).toFixed(3)
    );
    setSecondCurrencyName(secondCurrencyName);
  };

  const onSecondInputChange = (secondCurrencyValue) => {
    setFirstCurrencyValue(
      (
        (secondCurrencyValue * rates[firstCurrencyName]) /
        rates[secondCurrencyName]
      ).toFixed(3)
    );
    setSecondCurrencyValue(secondCurrencyValue);
  };

  useEffect(() => {
    onFirstInputChange(1);
  }, [firstCurrencyName, secondCurrencyName]);

  return (
    <div className={styles.forms__container}>
      <Form
        rates={rates}
        currentName={firstCurrencyName}
        setCurrencyName={onFirstSelectChange}
        currentValue={firstCurrencyValue}
        setCurrencyValue={setFirstCurrencyValue}
        onInputChange={onFirstInputChange}
      />
      <Form
        rates={rates}
        currentName={secondCurrencyName}
        setCurrencyName={onSecondSelectChange}
        currentValue={secondCurrencyValue}
        setCurrencyValue={setFirstCurrencyValue}
        onInputChange={onSecondInputChange}
      />
    </div>
  );
};

export default Rates;
