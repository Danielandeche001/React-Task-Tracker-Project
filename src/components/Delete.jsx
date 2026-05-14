function Delete ({ tasks, deleteTask}) {

    function handleDelete() {
        // fetch data
        fetch(`http://localhost:3000/tasks/${tasks.id}`, 
            // deletes the task
            {method: "DELETE",})
            .then((r) => {
                if (r.ok) {
                    deleteTask(tasks.id);
                }
            });
    };

    return (
        <div>
           <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Delete;