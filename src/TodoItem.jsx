export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="item-list">
      <input type="checkbox"
        checked={completed}
        onChange={(e) =>
          toggleTodo(id, e.target.checked)
        } />
      <h3>{title}</h3>
      <button className="btn"
        onClick={() => deleteTodo(id)}
      >
        -
      </button>
    </li>
  )
}