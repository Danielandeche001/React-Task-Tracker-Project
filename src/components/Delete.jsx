import { deleteTask as deleteTaskFromDatabase } from "../services/tasks";

function Delete ({ tasks, deleteTask}) {

    async function handleDelete() {
        try {
            await deleteTaskFromDatabase(tasks.id);
            deleteTask(tasks.id);
        } catch (error) {
            console.error("Delete Error:", error);
            alert("Could not delete the task. Check your Firebase setup.");
        }
    };

    return (
        <div>
           <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Delete;
