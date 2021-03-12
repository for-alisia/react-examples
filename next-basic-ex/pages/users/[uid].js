const UserIdPage = ({ id }) => {
  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const {
    params: { uid },
  } = context;

  return {
    props: {
      id: uid,
    },
  };
}
