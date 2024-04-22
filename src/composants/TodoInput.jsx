import { useRef } from "react";

const TodoInput = ({onSetTodo}) => {
    const input = useRef()
    const addTodo = () => {
        if (input.current.value === '') return 
        onSetTodo(previous => [input.current.value, ...previous])

    }
    return (
        <div className='newtodo'>
            <div>
                <input type="text" ref={input}/>
                <label for="todo">Type a new todo</label>
            </div>
            <button onClick={addTodo}>Add Todo</button>
        </div>

    );
  };


export default TodoInput