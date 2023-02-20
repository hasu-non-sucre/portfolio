import styles from "@/styles/skill.module.css";
import classNames from "classnames";

export default function About({ isActive, handleActive }) {
    const close = () => {
        handleActive();
    }

  return (
    <div className={classNames(styles.skill, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}></div>
        <div className={styles.email}>
          ご連絡はこちらまで<br /><br />
          hasu_m.s@icloud.com
        </div>
    </div>
  );
}
