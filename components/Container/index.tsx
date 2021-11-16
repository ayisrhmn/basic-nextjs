import {ReactNode} from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Container.module.css';

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const Container = (props: Props) => {
  const {children, pageTitle} = props;

  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name={'description'} content={'Learn NextJS Basic'} />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
