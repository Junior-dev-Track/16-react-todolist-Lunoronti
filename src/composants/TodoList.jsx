import Todo from "./Todo.jsx";

const TodoList = ({todos}) => {
  return (
    <div className='todo'>
      {todos.map((todo, index) => {
        return (
          <Todo key={todo.id} id={todo.id} value={todo.value} checked={todo.isChecked}/>
        )
      })}
    </div>
  );
};

export default TodoList



