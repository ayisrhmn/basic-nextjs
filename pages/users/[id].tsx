import Container from '../../components/Container';

interface Props {
  user: any;
}

const UserDetail = (props: Props) => {
  const {user} = props;

  return (
    <Container pageTitle={'User Detail'}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Container>
  );
};

export default UserDetail;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((v: any) => ({
    params: {
      id: `${v.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};
