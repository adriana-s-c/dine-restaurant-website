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

type TimeFieldProps = {
  errors: any;
  touched: any;
};

export function TimeField({ errors, touched }: TimeFieldProps) {
  return (
    <div className={styles.fieldBox}>
      <div
        className={
          (errors.hour && touched.hour) || (errors.minutes && touched.minutes)
            ? styles.labelBoxError
            : styles.labelBox
        }
      >
        <label htmlFor="time" className={styles.label}>
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
        <Field
          as="select"
          id="minutes"
          name="minutes"
          className={styles.select}
        >
          <option>00</option>
          <option>15</option>
          <option>30</option>
          <option>45</option>
        </Field>
        <Field
          as="select"
          id="daytime"
          name="daytime"
          className={styles.select}
        >
          <option>AM</option>
          <option>PM</option>
        </Field>
      </div>
    </div>
  );
}
