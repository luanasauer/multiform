import { Router } from "./router"
import { FormProvider } from "./contexts/FormContex";

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}
export default App;
