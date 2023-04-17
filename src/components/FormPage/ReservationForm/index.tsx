import * as React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./index.module.css";
import { Counter } from "./Counter";
import { DataContext } from "../../../context";
import { TextField } from "./TextField";
import { DateField } from "./DateField";
import { TimeField } from "./TimeField";

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
            <TextField errors={errors} touched={touched} textFieldName="name" />
            <TextField
              errors={errors}
              touched={touched}
              textFieldName="email"
            />
            <DateField errors={errors} touched={touched} />
            <div className={styles.dateBox}>
              <TimeField errors={errors} touched={touched} />
            </div>
            <Counter people={people} setPeople={setPeople} />
            <button
              type="submit"
              className={styles.button}
              disabled={people > 14}
            >
              MAKE RESERVATION
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
