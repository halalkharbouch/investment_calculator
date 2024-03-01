



export default function UserForm({ onChange, formData }) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={formData.initialInvestment}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={formData.annualInvestment}
            onChange={onChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={formData.expectedReturn}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
}
