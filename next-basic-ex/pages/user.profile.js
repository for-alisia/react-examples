const UserProfile = ({ username }) => {
  return (
    <div>
      <h1>User Name: {username}</h1>
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Lena',
    },
  };
}
