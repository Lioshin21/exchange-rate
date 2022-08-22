/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Form from "./Form/Form";
import styles from "./Rates.module.css";
import flipButton from "../../img/arrows.svg";

const Rates = ({ rates }) => {
  const [firstValue, setFirstValue] = useState(1);
  const [firstName, setFirstName] = useState("USD");

  const [secondValue, setSecondValue] = useState(1);
  const [secondName, setSecondName] = useState("USD");

  const fixedValue = (value, num = 2) => {
    return value.toFixed(num);
  };

  const onSelectChange =
    (thisSetName, thisSetValue, anotherValue, anotherName) =>
    (currentName) => {
      thisSetValue(
        fixedValue((anotherValue * rates[currentName]) / rates[anotherName])
      );
      thisSetName(currentName);
    };

  const onInputChange =
    (thisSetValue, thisName, anotherSetValue, anotherName) =>
    (currentValue) => {
      thisSetValue(currentValue);
      anotherSetValue(
        fixedValue((currentValue * rates[anotherName]) / rates[thisName])
      );
    };

  return (
    <div className={styles.forms__container}>
      <Form
        rates={rates}
        currentName={firstName}
        setName={onSelectChange(
          setFirstName,
          setFirstValue,
          secondValue,
          secondName
        )}
        currentValue={firstValue}
        onInputChange={onInputChange(
          setFirstValue,
          firstName,
          setSecondValue,
          secondName
        )}
      />
      <img
        className={styles.arrow}
        src={flipButton}
        onClick={() => {
          setFirstName(secondName);
          setFirstValue(secondValue);
          setSecondName(firstName);
          setSecondValue(firstValue);
        }}
      />
      <Form
        rates={rates}
        currentName={secondName}
        setName={onSelectChange(
          setSecondName,
          setSecondValue,
          firstValue,
          firstName
        )}
        currentValue={secondValue}
        onInputChange={onInputChange(
          setSecondValue,
          secondName,
          setFirstValue,
          firstName
        )}
      />
    </div>
  );
};

export default Rates;
