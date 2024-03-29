import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Results from "./components/Results";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  let results = calculateInvestmentResults(formData);
  const durationIsValid = formData.duration >= 1;

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.id]: +event.target.value,
    }));
    results = calculateInvestmentResults(formData);
  };
  return (
    <main>
      <Header />
      <UserForm onChange={handleChange} formData={formData} />
      {!durationIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {durationIsValid && <Results results={results} />}
    </main>
  );
}

export default App;
