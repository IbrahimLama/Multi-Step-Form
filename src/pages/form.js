import * as React from "react"
import Steps from "../containers/steps/Steps";

const FormPage = () => {
  return (
    <main>Multi Step Form
      <Steps/>
    </main>
  )
};

export default FormPage;

export const Head = () => <title>Multi Step Form</title>;