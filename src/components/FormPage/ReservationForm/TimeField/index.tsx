import { Field } from "formik";
import { NumberInput } from "../NumberInput";
import styles from "./index.module.css";

function validateHour(value: number) {
  let error;
  if (!value) {
    error = "This field is incomplete";
  }
  if (value > 12) {
    error = "Hours cannot be bigger than 12";
  }
  return error;
}
function validateMinutes(value: number) {
  let error;
  if (!value) {
    error = "This field is incomplete";
  }
  if (value > 59) {
    error = "Minutes number is too high";
  }
  return error;
}

type TimeFieldProps = {
  errors: any;
  touched: any;
};

export function TimeField({ errors, touched }: TimeFieldProps) {
  return (
    <div className={styles.fieldBox}>
      <div className={styles.errorMessageBox}>
        <label
          htmlFor="time"
          className={
            (errors.hour && touched.hour) || (errors.minutes && touched.minutes)
              ? styles.labelError
              : styles.label
          }
        >
          Pick a time
        </label>
        {(errors.hour && touched.hour) ||
        (errors.minutes && touched.minutes) ? (
          <div className={styles.errorMessage}>
            {errors.hour || errors.minutes}
          </div>
        ) : null}
      </div>
      <div className={styles.timeInputsBox}>
        <NumberInput
          errors={errors}
          touched={touched}
          numberType="hour"
          validation={validateHour}
          inputLength={2}
          placeholder="09"
        />
        <NumberInput
          errors={errors}
          touched={touched}
          numberType="minutes"
          validation={validateMinutes}
          inputLength={2}
          placeholder="00"
        />
        <Field
          as="select"
          id="daytime"
          name="daytime"
          className={styles.select}
        >
          <option className={styles.option}>AM</option>
          <option>PM</option>
        </Field>
      </div>
    </div>
  );
}
