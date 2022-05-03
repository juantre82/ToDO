function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn react',
            isCompleted: false,
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'Build Todo App',
            isCompleted: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos)
    }

    const removeToDo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
    return (
        <div className='app'>
            <div className='todo-list'>
                {todos.map((todo,i) =>
                    <Todo index={i} key={i} todo={todo} remove={removeToDo}/>)}
                    <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)