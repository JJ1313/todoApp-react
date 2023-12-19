import { useState } from "react"
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="input-container">
        <label htmlFor="item"></label>
        <input type="text" id="item"
          value={newItem}
          onChange={e => {
            setNewItem(e.target.value)
          }}
          placeholder="Add item" />
      </div>
      <button className="btn" type="submit">+</button>
    </form>
  )
}