import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttpClient from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttpClient();

  useEffect(() => {
    fetchTasks(
      {
        url: 'https://react-4866c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      },
      (tasks) => {
        const loadedTasks = [];
        for (const taskKey in tasks) {
          loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
        }
        setTasks(loadedTasks);
      }
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
