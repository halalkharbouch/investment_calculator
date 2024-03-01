import { formatter } from "../util/investment";

export default function Results({ results }) {
  let totalInterest = 0;

  const deriveTotalInterest = (data) => {
    const total = Math.round((totalInterest += data));
    return total;
  };
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {results.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(deriveTotalInterest(data.interest))}</td>
            <td>{formatter.format(data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
