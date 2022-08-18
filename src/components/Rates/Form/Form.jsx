import Select from "react-select";
import styles from "./Form.module.css";

const Form = ({
  setCurrencyName,
  currentName,
  currentValue,
  setCurrencyValue,
  rates,
  onInputChange,
}) => {
  const ratesList = Object.keys(rates[0]).map((el) => {
    return { value: el, label: el };
  });

  const getName = (data) => {
    const currency = data.value;
    setCurrencyName(currency);
    onInputChange(rates[0][currency]);
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
      {console.log(currentName, currentValue)}
    </div>
  );
};

export default Form;
