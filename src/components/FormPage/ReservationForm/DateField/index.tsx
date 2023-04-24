import { NumberInput } from "../NumberInput";
import styles from "./index.module.css";

type DateFieldProps = {
  errors: any;
  touched: any;
};

function validateMonth(value: number) {
  let error;
  if (!value) {
    error = "This field is incomplete";
  } else if (value > 12) {
    error = "Month number is too big";
  }
  return error;
}

function validateDay(value: number) {
  let error;
  if (!value) {
    error = "This field is incomplete";
  } else if (value > 31) {
    error = "Month number is too big";
  }
  return error;
}

function validateYear(value: number) {
  let error;
  if (!value) {
    error = "This field is incomplete";
  } else if (value === 2023) {
    error = "We book tables for current year";
  } else if (value == 2024) {
    error = "We do not book for 2024 yet";
  } else if (value > 2024 || value < 2021) {
    error = "Year number is incorrect";
  }
  return error;
}

export function DateField({ errors, touched }: DateFieldProps) {
  return (
    <div className={styles.fieldBox}>
      <div
        className={
          (errors.month && touched.month) ||
          (errors.day && touched.day) ||
          (errors.year && touched.year)
            ? styles.labelBoxError
            : styles.labelBox
        }
      >
        <label htmlFor="date" className={styles.label}>
          Pick a date
        </label>
        {(errors.month && touched.month) ||
        (errors.day && touched.day) ||
        (errors.year && touched.year) ? (
          <div className={styles.errorMessage}>
            {errors.month || errors.day || errors.year}
          </div>
        ) : null}
      </div>
      <div className={styles.numberInputsBox}>
        <NumberInput
          validation={validateMonth}
          errors={errors}
          touched={touched}
          numberType="month"
          placeholder="MM"
          inputLength={2}
        />
        <NumberInput
          validation={validateDay}
          errors={errors}
          touched={touched}
          numberType="day"
          placeholder="DD"
          inputLength={2}
        />
        <NumberInput
          validation={validateYear}
          errors={errors}
          touched={touched}
          numberType="year"
          placeholder="YYYY"
          inputLength={4}
        />
      </div>
    </div>
  );
}
