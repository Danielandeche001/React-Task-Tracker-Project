import { useState } from "react";
import { updateTask } from "../services/tasks";

function Update({ tasks, onUpdateTask }) {
  const [description, setDescription] = useState(tasks.description);

  function handleUpdate(e) {
    e.preventDefault();

    updateTask(tasks.id, { description })
      .then((updatedTask) => onUpdateTask(updatedTask))
      .catch((error) => {
        console.error("Update Error:", error);
        alert("Could not update the task. Check your Firebase setup.");
      });
  }

  return (
    <form className="update-form" onSubmit={handleUpdate}>
      <label>Edit description</label>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Update Description</button>
    </form>
  );
}

export default Update;
