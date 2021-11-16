import Container from '../components/Container';
import styles from '../styles/Blog.module.css';

interface Props {
  dataBlog: any;
}

const Blog = (props: Props) => {
  const {dataBlog} = props;
  return (
    <Container pageTitle={'Blog'}>
      {dataBlog.map((item: any) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </Container>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
};
