import Select from "react-select";
import styles from "./Form.module.css";

const Form = ({
  setCurrencyName,
  currentName,
  currentValue,
  rates,
  onInputChange,
}) => {
  const ratesList = Object.keys(rates).map((el) => {
    return { value: el, label: el };
  });

  const getName = (data) => {
    const currency = data.value;
    setCurrencyName(currency);
    onInputChange(rates[currency]);
  };

  return (
    <div className={styles.form}>
      <Select
        options={ratesList}
        onChange={getName}
        defaultValue={{ value: "USD", label: "USD" }}
        placeholder={currentName}
      />
      <input
        type="number"
        className={styles.input}
        value={currentValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default Form;
