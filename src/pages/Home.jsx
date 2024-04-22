import { useState } from "react"
import TodoInput from "../composants/TodoInput.jsx"
import TodoList from "../composants/TodoList.jsx"

const Home = () => {
  const [todos, setTodo] = useState([])
  console.log(todos);

  const [id, setId] = useState(1)

  return(
    <main className="todo_main">
      <TodoInput onSetTodo={setTodo} onSetId={setId} id={id}/>
      <TodoList todos={todos}/>
    </main>
  )
}

export default Home