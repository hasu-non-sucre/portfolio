import styles from "@/styles/work03.module.css";
import classNames from "classnames";
import Image from "next/image";

import work03_01 from "@/../public/work/todo01.png";
import work03_02 from "@/../public/work/todo02.png";
import work03_03 from "@/../public/work/todo03.png";

export default function About({ isActive, handleActive }) {
  const close = () => {
    handleActive();
  };

  return (
    <div className={classNames(styles.work03, { [styles.isActive]: isActive })}>
      <div className={styles.close} onClick={close}></div>
      <p className={styles.repo}>github: <a href="https://github.com/hasu-non-sucre/next-react-todo" target="_blank" rel="noopener noreferrer">https://github.com/hasu-non-sucre/next-react-todo</a></p>

      <div className={styles.contents}>
        <div className={styles.img}>
          <Image src={work03_01} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work03_02} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work03_03} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
