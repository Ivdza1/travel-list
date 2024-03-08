import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

// iewhiwehighiwe

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  )
}

function Logo() {
  return (

    <h1>🌴 Far Away 💼</h1>

  )

}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          (num => (
            <option value={num} key={num}>{num}</option>
          ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">ADD</button>
    </form >
  )

}

function List() {
  return (
    <div className="list">
      <ul>{initialItems.map(i => <Item i={i} key={i.id} />)}</ul >
    </div>
  )
}

function Item({ i }) {
  return (
    <li>
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>{i.quantity} {i.description}</span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats"><em>🎒 You have X items on your list and you already packed X items (X%)</em></footer>
  )
}