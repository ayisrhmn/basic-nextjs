import React from 'react';
import {useRouter} from 'next/router';

const page404 = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => {};
  }, []);

  return (
    <div>
      <h1 className={'title-404'}>Oooppss...</h1>
      <h1 className={'title-404'}>Halaman yang anda cari tidak ditemukan</h1>
    </div>
  );
};

export default page404;
