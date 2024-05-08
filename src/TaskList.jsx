// Este es el componente que esta siendo importado en App.jsx
function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <h1>No hay tareas aun</h1>;
    }

    return (
        <div>
            {tasks.map(
                (
                    task // map para hacerlo en cada elemento de la lista
                ) => (
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default TaskList;
