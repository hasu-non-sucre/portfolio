import styles from "@/styles/contact.module.css";
import classNames from "classnames";

export default function About({ isActive, handleActive }) {
    const close = () => {
        handleActive();
    }

  return (
    <div className={classNames(styles.contact, { [styles.isActive]: isActive })}>
        <div className={styles.close} onClick={close}>
        </div>
    </div>
  );
}
