import Container from '../../components/Container';
import {useRouter} from 'next/router';
import styles from '../../styles/Users.module.css';

interface Props {
  dataUsers: Array<any>;
}

const Users = (props: Props) => {
  const {dataUsers} = props;
  const router = useRouter();

  return (
    <Container pageTitle={'User'}>
      {dataUsers.map((item: any) => {
        return (
          <div
            key={item.id}
            onClick={() => router.push(`/users/${item.id}`)}
            className={styles.card}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
      <p>User Page</p>
    </Container>
  );
};

export default Users;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
};
