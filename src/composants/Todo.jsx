const Todo = ({id, value, checked}) => {
  return (
    <div>
      <input type="checkbox" id={id} name={`todo_${id}`} checked={checked}/>
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default Todo;