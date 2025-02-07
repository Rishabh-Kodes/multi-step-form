import MultiStepForm from "./containers/form";
import { FormProvider } from "./containers/form/form.context";

function App() {
  return (
    <>
      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </>
  );
}

export default App;
