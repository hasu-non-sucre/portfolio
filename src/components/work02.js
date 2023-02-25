import styles from "@/styles/work02.module.css";
import classNames from "classnames";
import Image from "next/image";

import work02_01 from "@/../public/work/santa01.jpg";
import work02_02 from "@/../public/work/santa02.jpg";
import work02_03 from "@/../public/work/santa03.jpg";

export default function About({ isActive, handleActive }) {
  const close = () => {
    handleActive();
  };

  return (
    <div className={classNames(styles.work02, { [styles.isActive]: isActive })}>
      <div className={styles.close} onClick={close}></div>
      <p className={styles.repo}>github: <a href="https://github.com/FunLocks/team2008" target="_blank">https://github.com/FunLocks/team2008</a></p>

      <div className={styles.contents}>
        <div className={styles.img}>
          <Image src={work02_01} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work02_02} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work02_03} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
