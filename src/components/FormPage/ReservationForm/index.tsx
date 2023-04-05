import * as React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./index.module.css";
import { Counter } from "./Counter";
import { DataContext } from "../../../context";

interface Values {
  name: string;
  email: string;
  month: number;
  day: number;
  year: number;
  hour: number;
  minutes: number;
  daytime: string;
  people: number;
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

function validateName(value: string) {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (value.length < 2) {
    error = "It's too short";
  }
  return error;
}

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
  } else if (value < 2023) {
    error = "We book tables for current year";
  } else if (value == 2024) {
    error = "We do not book for 2024 yet";
  }
  return error;
}

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

export function ReservationForm() {
  const [people, setPeople] = React.useState(2);
  const { setData } = React.useContext(DataContext);

  return (
    <div className={styles.box}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          month: "",
          day: "",
          year: "",
          hour: "",
          minutes: "",
          daytime: "AM",
          people: 2,
        }}
        onSubmit={async (values) => {
          values.people = people;
          await new Promise((r) => setTimeout(r, 500));
          setData(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formContent}>
            <div className={styles.fieldBox}>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                validate={validateName}
                className={
                  errors.name && touched.name ? styles.fieldError : styles.field
                }
              />
              {errors.name && touched.name ? (
                <div className={styles.errorMessage}>{errors.name}</div>
              ) : null}
            </div>
            <div className={styles.fieldBox}>
              <Field
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                validate={validateEmail}
                className={
                  errors.email && touched.email
                    ? styles.fieldError
                    : styles.field
                }
              />
              {errors.email && touched.email ? (
                <div className={styles.errorMessage}>{errors.email}</div>
              ) : null}
            </div>
            <div className={styles.dateBox}>
              <div className={styles.errorMessageBox}>
                <label
                  htmlFor="lastName"
                  className={
                    (errors.month && touched.month) ||
                    (errors.day && touched.day) ||
                    (errors.year && touched.year)
                      ? styles.labelError
                      : styles.label
                  }
                >
                  Pick a date
                </label>
                {(errors.month && touched.month) ||
                (errors.day && touched.day) ||
                (errors.year && touched.year) ? (
                  <div className={styles.errorMessageDate}>
                    {errors.month || errors.day || errors.year}
                  </div>
                ) : null}
              </div>
              <Field
                id="month"
                name="month"
                placeholder="MM"
                className={
                  errors.month && touched.month
                    ? styles.fieldDateError
                    : styles.fieldDate
                }
                maxLength="2"
                validate={validateMonth}
              />
              <Field
                id="day"
                name="day"
                placeholder="DD"
                className={
                  errors.day && touched.day
                    ? styles.fieldDateError
                    : styles.fieldDate
                }
                maxLength="2"
                validate={validateDay}
              />
              <Field
                id="year"
                name="year"
                placeholder="YYYY"
                className={
                  errors.year && touched.year
                    ? styles.fieldDateBiggerError
                    : styles.fieldDateBigger
                }
                maxLength="4"
                validate={validateYear}
              />
            </div>
            <div className={styles.dateBox}>
              <div className={styles.errorMessageBox}>
                <label
                  htmlFor="lastName"
                  className={
                    (errors.hour && touched.hour) ||
                    (errors.minutes && touched.minutes)
                      ? styles.labelError
                      : styles.label
                  }
                >
                  Pick a time
                </label>
                {(errors.hour && touched.hour) ||
                (errors.minutes && touched.minutes) ? (
                  <div className={styles.errorMessageDate}>
                    {errors.hour || errors.minutes}
                  </div>
                ) : null}
              </div>
              <Field
                id="hour"
                name="hour"
                placeholder="09"
                className={
                  errors.hour && touched.hour
                    ? styles.fieldDateError
                    : styles.fieldDate
                }
                maxLength="2"
                validate={validateHour}
              />
              <Field
                id="minutes"
                name="minutes"
                placeholder="00"
                className={
                  errors.minutes && touched.minutes
                    ? styles.fieldDateError
                    : styles.fieldDate
                }
                maxLength="2"
                validate={validateMinutes}
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
            <Counter people={people} setPeople={setPeople} />
            <button type="submit" className={styles.button}>
              MAKE RESERVATION
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
