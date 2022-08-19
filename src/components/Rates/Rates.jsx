/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import styles from "./Rates.module.css";
import flipButton from "../../img/arrows.svg";

const Rates = ({ rates }) => {
  const [firstCurrencyValue, setFirstCurrencyValue] = useState(1);
  const [firstCurrencyName, setFirstCurrencyName] = useState("USD");

  const [secondCurrencyValue, setSecondCurrencyValue] = useState(1);
  const [secondCurrencyName, setSecondCurrencyName] = useState("USD");

  const fixedValue = (value, num = 3) => {
    return value.toFixed(num);
  };

  const onFirstSelectChange = (firstCurrencyName) => {
    setSecondCurrencyValue(
      fixedValue(
        (firstCurrencyValue * rates[secondCurrencyName]) /
          rates[firstCurrencyName]
      )
    );
    setFirstCurrencyName(firstCurrencyName);
  };

  const onFirstInputChange = (firstCurrencyValue) => {
    setSecondCurrencyValue(
      fixedValue(
        (firstCurrencyValue * rates[secondCurrencyName]) /
          rates[firstCurrencyName]
      )
    );
    setFirstCurrencyValue(firstCurrencyValue);
  };

  const onSecondSelectChange = (secondCurrencyName) => {
    setFirstCurrencyValue(
      fixedValue(
        (secondCurrencyValue * rates[firstCurrencyName]) /
          rates[secondCurrencyName]
      )
    );
    setSecondCurrencyName(secondCurrencyName);
  };

  const onSecondInputChange = (secondCurrencyValue) => {
    setFirstCurrencyValue(
      fixedValue(
        (secondCurrencyValue * rates[firstCurrencyName]) /
          rates[secondCurrencyName]
      )
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
      <img
        className={styles.arrow}
        src={flipButton}
        onClick={() => {
          const value = firstCurrencyName;
          setFirstCurrencyName(secondCurrencyName);
          setSecondCurrencyName(value);
        }}
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
