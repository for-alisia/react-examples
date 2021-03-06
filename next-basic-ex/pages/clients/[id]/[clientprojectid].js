import { useRouter } from 'next/router';

const SelectedClientProject = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>
        Selected Client {router.query.id} Project here {router.query.clientprojectid}
      </h1>
    </div>
  );
};

export default SelectedClientProject;
