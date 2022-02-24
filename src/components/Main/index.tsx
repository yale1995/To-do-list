import { Container, List } from "./style";
import { FiCheckSquare, FiTrash } from "react-icons/fi";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask() {
    if (!newTaskTitle) {
      return;
    }

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <Container>
      <header>
        <h1>Minhas tasks</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Add new task"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>
      <List>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className={task.isComplete ? "completed" : ""}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    readOnly
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button type="button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}></FiTrash>
              </button>
            </li>
          ))}
        </ul>
      </List>
    </Container>
  );
}
