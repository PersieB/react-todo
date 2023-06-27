
import { useState } from 'react';
import styles from './TaskItem.module.css';
import {CheckIcon} from '@heroicons/react/24/outline';
import {PencilSquareIcon} from '@heroicons/react/24/outline';
import {TrashIcon} from '@heroicons/react/24/outline';

const TaskItem = ({task}) =>{
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked);
    }
    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input type="checkbox" 
                className={styles.checkbox}
                checked={isChecked}
                name={task.name}
                id={task.id}
                onChange={handleCheckBoxChange}
                 />
                <label htmlFor={task.id}
                className={styles.label}> 
                    {task.name}
                <p className={styles.checkmark}>
                    <CheckIcon strokeWidth={2} width={24} height={24} />
                </p>
                </label>
            </div>
            <div className={styles["task-group"]}>
                <button className = 'btn' aria-label = {`Update ${task.name} Task`}>
                    <PencilSquareIcon strokeWidth={2} width={24} height={24} />
                </button>
                <button className = {`btn ${styles.delete}`} aria-label = {`Delete ${task.name} Task`}>
                    <TrashIcon strokeWidth={2} width={24} height={24} />
                </button>
            </div>  
        </li>
    )
}

export default TaskItem