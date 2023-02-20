import styles from "@/styles/work1.module.css";
import classNames from "classnames";
import Image from "next/image";

import work01_01 from "@/../public/work/katikomi01.jpg";
import work01_02 from "@/../public/work/katikomi02.jpg";
import work01_03 from "@/../public/work/katikomi03.jpg";

export default function About({ isActive, handleActive }) {
  const close = () => {
    handleActive();
  };

  return (
    <div className={classNames(styles.work1, { [styles.isActive]: isActive })}>
      <div className={styles.close} onClick={close}></div>

      <div className={styles.contents}>
        <div className={styles.img}>
          <Image src={work01_01} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work01_02} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.img}>
          <Image src={work01_03} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
