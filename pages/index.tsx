import Image from 'next/image';
import Container from '../components/Container';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Container pageTitle={'Home'}>
      <Image src={'/profile.png'} width={200} height={200} alt={'profile'} />
      <h1 className={styles['title-home']}>Welcome Fariz</h1>
    </Container>
  );
};

export default Home;
