import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItem) =>
      prevItem.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, packed: !prevItem.packed }
          : prevItem
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
