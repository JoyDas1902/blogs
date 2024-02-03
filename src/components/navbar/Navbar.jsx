import { auth } from '@/lib/auth';
import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';
import Image from 'next/image';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/favicon.ico" alt="logo" width={35} height={35}/>
        Blogs
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
