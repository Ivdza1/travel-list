export default function Item({ i, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input type="checkbox" value={i.packed} onChange={() => { onToggleItem(i.id); }} />
            <span style={i.packed ? { textDecoration: "line-through" } : {}}>{i.quantity} {i.description}</span>
            <button onClick={() => onDeleteItem(i.id)}>❌</button>
        </li>
    );
}
