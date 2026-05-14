function FilterButtons({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("All")}>
        All
      </button>

      <button onClick={() => setFilter("Low")}>
        Low
      </button>

      <button onClick={() => setFilter("Medium")}>
        Medium
      </button>

      <button onClick={() => setFilter("High")}>
        High
      </button>
    </div>
  );
}

export default FilterButtons;