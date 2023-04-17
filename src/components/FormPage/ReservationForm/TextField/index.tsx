import styles from "./index.module.css";
import { Field } from "formik";

function validateName(value: string) {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (value.length < 2) {
    error = "It's too short";
  }
  return error;
}

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

type TextFieldProps = {
  touched: any;
  errors: any;
  textFieldName: string;
};

export function TextField({ touched, errors, textFieldName }: TextFieldProps) {
  const isError =
    textFieldName === "name"
      ? errors.name && touched.name
      : errors.email && touched.email;

  const validation = textFieldName === "name" ? validateName : validateEmail;

  return (
    <div className={isError ? styles.textFieldBoxError : styles.textFieldBox}>
      <Field
        id={textFieldName}
        name={textFieldName}
        placeholder={
          textFieldName.charAt(0).toUpperCase() + textFieldName.slice(1)
        }
        validate={validation}
        className={isError ? styles.fieldError : styles.field}
      />
      {isError ? (
        <div className={styles.errorMessage}>{errors.name}</div>
      ) : null}
    </div>
  );
}
