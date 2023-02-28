import styles from "@/styles/skill.module.css";
import classNames from "classnames";

export default function About({ isActive, handleActive }) {
    const close = () => {
        handleActive();
    }

  return (
    <div className={classNames(styles.skill, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}></div>

        <ul className={styles.list}>
          <li className={styles.item}>html/css</li>
          <li className={styles.item}>javascript</li>
          <li className={styles.item}>React</li>
          <li className={styles.item}>SwiftUI</li>
          <li className={styles.item}>Kotlin</li>
          <li className={styles.item}>Python</li>
          <li className={styles.item}>C++</li>
        </ul>
    </div>
  );
}
