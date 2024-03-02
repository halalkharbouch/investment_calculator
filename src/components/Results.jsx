import { formatter } from "../util/investment";

export default function Results({ results }) {
  let totalInterest = 0;

  const deriveTotalInterest = (data) => {
    const total = (totalInterest += data);
    return total;
  };

  const deriveTotalInvestedCapital = () => {};
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
        {results.map((data) => {
          const totalInterest = deriveTotalInterest(data.interest);
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
