import * as React from "react";
import { ReservationForm } from "./ReservationForm";
import { FormHeader } from "./FormHeader";
import { PageBody } from "./PageBody";
import { ConfirmationBox } from "./ConfirmationBox";
import { DataContext } from "../../context";

export function FormPage() {
  const [data, setData] = React.useState();

  return (
    <>
      <FormHeader />
      <PageBody />
      <DataContext.Provider value={{ data, setData }}>
        {data ? <ConfirmationBox /> : <ReservationForm />}
      </DataContext.Provider>
    </>
  );
}
