const TodoInput = () => {
    return (
        <div className='newtodo'>
            <div>
                <input type="text"/>
                <label for="todo">Type a new todo</label>
            </div>
            <button>Add Todo</button>
        </div>

    );
  };


export default TodoInput