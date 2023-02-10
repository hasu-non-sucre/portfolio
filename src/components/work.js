import styles from "@/styles/work.module.css";
import classNames from "classnames";

export default function About({ isActive, handleActive }) {
    const close = () => {
        handleActive();
    }

  return (
    <div className={classNames(styles.work, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}></div>

        <div className={styles.contents}>
          <div className={styles.content}>

          </div>
          <div className={styles.content}>
            
          </div>
          <div className={styles.content}>
            
          </div>
        </div>
    </div>
  );
}
