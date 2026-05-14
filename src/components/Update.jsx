import { useState} from "react";

function Update ({tasks, onUpdateTask}) {
    const [description, setDescription] = useState(tasks.description);

    function handleUpdate(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/tasks/${tasks.id}`,
            {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description})
            }
        )
        .then((r) => r.json())
        .then((updateTask) => onUpdateTask(updateTask));
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