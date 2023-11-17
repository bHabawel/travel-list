export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((prevItems) => prevItems.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! You are ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed 
          ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
