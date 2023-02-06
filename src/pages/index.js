import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import cx from "classnames";
import Link from "next/link";

import profile from "@/../public/profile.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={cx(styles.card, styles.flex)}>
          <div className={styles.leftCol}>
            <div className={styles.profile}>
              <div className={styles.profileImg_base}>
                <div className={styles.profileImg}>
                  <Image src={profile} layout="fill" objectFit="contain" />
                </div>
              </div>
              <p className={styles.profileName}>Muto Sota</p>
            </div>
          </div>

          <div className={styles.rightCol}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="#" className={styles.link}>
                  - About
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="#" className={styles.link}>
                  - Work
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="#" className={styles.link}>
                  - Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
