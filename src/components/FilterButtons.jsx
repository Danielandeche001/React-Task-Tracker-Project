function FilterButtons({ filter, setFilter }) {
  const priorities = ["All", "Low", "Medium", "High"];

  return (
    <div className="filter-buttons">
      {priorities.map((priority) => (
        <button
          className={filter === priority ? "active" : ""}
          key={priority}
          onClick={() => setFilter(priority)}
          type="button"
        >
          {priority}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
