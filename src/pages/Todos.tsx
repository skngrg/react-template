import { Spin } from 'antd';
import { todoApi } from '~/services/todosService';

export const Todos = () => {
  const { data, isLoading } = todoApi.useGetTodosQuery();

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <h1>TODOS</h1>
      {data && (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
