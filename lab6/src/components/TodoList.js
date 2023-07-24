function TodoList({list}){
    return(
        <div>
            <h1>Todo List</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;