import { useState} from "react";
import { updateTask } from "../services/tasks";

function Update ({tasks, onUpdateTask}) {
    const [description, setDescription] = useState(tasks.description);

    function handleUpdate(e) {
        e.preventDefault();

        updateTask(tasks.id, { description })
            .then((updatedTask) => onUpdateTask(updatedTask))
            .catch((error) => {
                console.error("Update Error:", error);
                alert("Could not update the task. Check your Firebase setup.");
            });
    };
    return (
            <div>
            <form onSubmit={handleUpdate}>
            <textarea 
            name="description" 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Update</button>
            </form>
            </div>
    );

};

export default Update;
