import styles from "@/styles/work.module.css";
import classNames from "classnames";
import { useState } from "react";
import Image from "next/image";

import Work01 from "@/components/work01";
import Work02 from "@/components/work02";
import Work03 from "@/components/work03";
import work01_01 from "@/../public/work/katikomi01.jpg";
import work02_01 from "@/../public/work/santa01.jpg";
import work03_01 from "@/../public/work/todo01.png";

export default function About({ isActive, handleActive }) {
  const close = () => {
    handleActive();
  };

  const [work01IsActive, setWork01IsActive] = useState(false);
  const handleWork01Active = () => {
    setWork01IsActive(!work01IsActive);
  };
  const [work02IsActive, setWork02IsActive] = useState(false);
  const handleWork02Active = () => {
    setWork02IsActive(!work02IsActive);
  };
  const [work03IsActive, setWork03IsActive] = useState(false);
  const handleWork03Active = () => {
    setWork03IsActive(!work03IsActive);
  };

  return (
    <>
      <div className={classNames(styles.work, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}></div>

        <div className={styles.contents}>
          <div className={styles.content} onClick={handleWork01Active}>
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
          <div className={styles.content} onClick={handleWork02Active}>
            <div className={styles.img}>
              <Image src={work02_01} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.text}>
              クリスマスに予定がある人の予定をランダムに予定がない人へ共有するアプリ。
              <br />
              学部3年のハッカソンにて、とにかく面白いアプリを目標に製作した。
              <br />
              3人で製作し、メインプログラマとして動いた。
            </p>
          </div>
          <div className={styles.content} onClick={handleWork03Active}>
            <div className={styles.img}>
              <Image src={work03_01} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.text}>
              簡単なtodoリストのwebアプリ。
              <br />
              Reactの勉強として製作した。
            </p>
          </div>
        </div>
      </div>
      <Work01 isActive={work01IsActive} handleActive={handleWork01Active}></Work01>
      <Work02 isActive={work02IsActive} handleActive={handleWork02Active}></Work02>
      <Work03 isActive={work03IsActive} handleActive={handleWork03Active}></Work03>
    </>
  );
}
