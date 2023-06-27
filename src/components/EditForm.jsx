import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const EditForm = ({editedTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div role="dialog" aria-labelledby="editTask">
            <form className="todo" onSubmit = {handleFormSubmit}>
                <div className="wrapper">
                    <input type="text" id = "editTask" className="input" 
                    value = {task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={70}
                    placeholder="Enter Task"
                    />
                    <label htmlFor="editTask" className="label">Enter Task</label>
                </div>
                <button className="btn"
                aria-label="Add Task"
                type="submit">
                    <PlusIcon />
                </button>
            </form>
        </div>
    )
}
export default EditForm
