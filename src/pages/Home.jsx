import TodoInput from "../composants/TodoInput.jsx"
import TodoList from "../composants/TodoList.jsx"


const Home = () => {
    return(
      <main class="todo_main">
        <TodoInput/>
        <TodoList/>
      </main>
    )
  }

export default Home