import "./App.css";
import Form from "./components/Form";
import { FormProvider } from "./context/FromContext";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
