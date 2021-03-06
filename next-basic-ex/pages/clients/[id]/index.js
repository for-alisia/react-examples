import { useRouter } from 'next/router';

const ClientsProjects = () => {
  const router = useRouter();

  const clickHandler = () => {
    //router.push('/clients/max/projectA');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projectA' },
    });
  };
  return (
    <div>
      <h1>Projects of a given client {router.query.id}</h1>
      <button onClick={clickHandler}>Load project A</button>
    </div>
  );
};

export default ClientsProjects;
