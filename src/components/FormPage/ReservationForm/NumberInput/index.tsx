import { Field } from "formik";
import styles from "./index.module.css";

type NumberInputProps = {
  numberType: string;
  validation: any;
  inputLength: number;
  errors: any;
  touched: any;
  placeholder: string;
};

export function NumberInput({
  numberType,
  validation,
  inputLength,
  errors,
  touched,
  placeholder,
}: NumberInputProps) {
  const isError = () => {
    switch (numberType) {
      case "month":
        return errors.month && touched.month;
      case "day":
        return errors.day && touched.day;
      case "year":
        return errors.year && touched.year;
      case "hour":
        return errors.hour && touched.hour;
      case "minutes":
        return errors.minutes && touched.minutes;
    }
  };

  return (
    <Field
      id={numberType}
      name={numberType}
      placeholder={placeholder}
      className={isError() ? styles.numberFieldError : styles.numberField}
      maxLength={inputLength}
      validate={validation}
      inputMode="numeric"
    />
  );
}
