import * as React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./index.module.css";
import { Counter } from "./Counter";

interface Values {
  name: string;
  email: string;
}

export function ReservationForm() {
  return (
    <div className={styles.box}>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={styles.formContent}>
          <Field
            id="name"
            name="name"
            placeholder="Name"
            className={styles.field}
          />
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className={styles.field}
          />
          <div className={styles.dateBox}>
            <label htmlFor="lastName" className={styles.label}>
              Pick a date
            </label>
            <Field
              id="month"
              name="month"
              placeholder="MM"
              className={styles.fieldDate}
            />
            <Field
              id="day"
              name="day"
              placeholder="DD"
              className={styles.fieldDate}
            />
            <Field
              id="year"
              name="year"
              placeholder="YYYY"
              className={styles.fieldDateLonger}
            />
          </div>

          <div className={styles.dateBox}>
            <label htmlFor="lastName" className={styles.label}>
              Pick a date
            </label>
            <Field
              id="hour"
              name="hour"
              placeholder="09"
              className={styles.fieldDate}
            />
            <Field
              id="minutes"
              name="minutes"
              placeholder="00"
              className={styles.fieldDate}
            />
            <select id="daytime" name="daytime" className={styles.select}>
              <option className={styles.option}>AM</option>
              <option>PM</option>
            </select>
          </div>
          <Counter />
          <button type="submit" className={styles.button}>
            MAKE RESERVATION
          </button>
        </Form>
      </Formik>
    </div>
  );
}
