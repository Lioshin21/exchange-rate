import React from "react";
import Select from "react-select";
import styles from "./Form.module.css";

const Form = ({
  setName,
  currentName,
  currentValue,
  rates,
  onInputChange,
}) => {
  const ratesList = Object.keys(rates).map((el) => {
    return { value: el, label: el };
  });

  return (
    <div className={styles.form}>
      <Select
        options={ratesList}
        onChange={(data) => setName(data.value)}
        value={{ value: currentName, label: currentName }}
      />
      <input
        min={0}
        type="number"
        className={styles.input}
        value={currentValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default Form;
