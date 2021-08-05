import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttpClient from '../../hooks/use-http';

const NewTask = (props) => {
  const { onAddTask } = props;

  const { isLoading, error, sendRequest: saveTask } = useHttpClient();

  const enterTaskHandler = async (taskText) => {
    saveTask(
      {
        url: 'https://react-4866c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        onAddTask(createdTask);
      }
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
