function Stats({ active, completed, total }) {
  return (
    <div className="stats">
      <div className="card">
        <h2 className="blue">{active}</h2>
        <span>Active</span>
      </div>

      <div className="card">
        <h2 className="green">{completed}</h2>
        <span>Completed</span>
      </div>

      <div className="card">
        <h2>{total}</h2>
        <span>Total</span>
      </div>
    </div>
  );
}

export default Stats;