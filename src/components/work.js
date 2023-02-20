import styles from "@/styles/work.module.css";
import classNames from "classnames";
import { useState } from "react";
import Image from "next/image";

import Work1 from "@/components/work1";
import work01_01 from "@/../public/work/katikomi01.jpg";

export default function About({ isActive, handleActive }) {
  const close = () => {
    handleActive();
  };

  const [work1IsActive, setWork1IsActive] = useState(false);
  const handleWork1Active = () => {
    setWork1IsActive(!work1IsActive);
  };

  return (
    <>
      <div className={classNames(styles.work, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}></div>

        <div className={styles.contents}>
          <div className={styles.content} onClick={handleWork1Active}>
            <div className={styles.img}>
              <Image src={work01_01} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.text}>
              ユーザに部屋への入退室を入力してもらうことで、部屋の内部を可視化するアプリ。
              <br />
              コロナ禍において大事なことである、密を避けることを目標に製作した。
              <br />
              5人で製作し、メインプログラマとして動いた。
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <Image src={work01_01} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.text}>
              クリスマスに予定がある人の予定を予定がない人へ共有するアプリ。
              <br />
              学部3年のハッカソンにて、とにかく面白いアプリを目標に製作した。
              <br />
              3人で製作し、メインプログラマとして動いた。
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <Image src={work01_01} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.text}>
              簡単なtodoリストのwebアプリ。
              <br />
              学部3年のハッカソンにて、とにかく面白いアプリを目標に製作した。
              <br />
              3人で製作し、メインプログラマとして動いた。
            </p>
          </div>
        </div>
      </div>
      <Work1 isActive={work1IsActive} handleActive={handleWork1Active}></Work1>
    </>
  );
}
