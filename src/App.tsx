import { type FormEvent, useMemo, useState } from 'react'

import './style.css'

type Todo = {
  id: string
  text: string
  createdAt: number
}

const createId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `todo-${Date.now()}-${Math.random().toString(16).slice(2)}`

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const total = todos.length
  const newestFirst = useMemo(
    () => [...todos].sort((a, b) => b.createdAt - a.createdAt),
    [todos]
  )

  const addTodo = () => {
    const text = input.trim()
    if (!text) return

    const next: Todo = {
      id: createId(),
      text,
      createdAt: Date.now(),
    }

    setTodos((prev) => [...prev, next])
    setInput('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo()
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <main className="page">
      <section className="panel glass">
        <header className="panel__header">
          <div>
            <p className="eyebrow">Today&apos;s focus</p>
            <h1 className="title">Todo Garden</h1>
            <p className="subtitle">
              Capture quick tasks, preview everything at a glance, and prune what you no longer need.
            </p>
          </div>
          <div className="badge">
            <span className="badge__value">{total}</span>
            <span className="badge__label">open tasks</span>
          </div>
        </header>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            autoFocus
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-btn" disabled={!input.trim()}>
            Add
          </button>
        </form>

        <div className="todo-list" role="list">
          {newestFirst.length === 0 ? (
            <p className="empty">Nothing here yet — start your list!</p>
          ) : (
            newestFirst.map((todo) => (
              <article className="todo" key={todo.id} role="listitem">
                <div>
                  <p className="todo__text">{todo.text}</p>
                  <p className="todo__meta">Added {new Date(todo.createdAt).toLocaleTimeString()}</p>
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeTodo(todo.id)}
                  aria-label={`Remove ${todo.text}`}
                >
                  ✕
                </button>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default App
