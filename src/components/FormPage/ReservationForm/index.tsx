import * as React from "react";
import { Formik, Form } from "formik";
import styles from "./index.module.css";
import { Counter } from "./Counter";
import { DataContext } from "../../../context";
import { TextField } from "./TextField";
import { DateField } from "./DateField";
import { TimeField } from "./TimeField";
import { Persist } from "formik-persist";

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
          minutes: "00",
          daytime: "AM",
          people: 2,
        }}
        onSubmit={async (values) => {
          values.people = people;
          await new Promise((r) => setTimeout(r, 500));
          setData(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.formContent}>
            <TextField errors={errors} touched={touched} textFieldName="name" />
            <TextField
              errors={errors}
              touched={touched}
              textFieldName="email"
            />
            <DateField errors={errors} touched={touched} />
            <TimeField errors={errors} touched={touched} />
            <Counter people={people} setPeople={setPeople} />
            <button
              type="submit"
              className={styles.button}
              disabled={people > 14 || isSubmitting === true}
            >
              MAKE RESERVATION
            </button>
            {/* <Persist name="reservation-form" /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
