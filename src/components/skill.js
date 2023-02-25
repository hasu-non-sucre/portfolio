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
          <li className={styles.item}>html/css&emsp;&emsp;&emsp;</li>
          <li className={styles.item}>2020.&nbsp;04&emsp;&emsp;&emsp;&emsp;公立はこだて未来大学 システム情報科学部 入学</li>
          <li className={styles.item}>2021 .&nbsp;04&emsp;&emsp;&emsp;&emsp;公立はこだて未来大学 システム情報科学部 情報アーキテクチャ学科 情報システムコース 配属</li>
          <li className={styles.item}>2021 .&nbsp;11&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;ハコレコドットコム株式会社 アルバイト入社</li>
          <li className={styles.item}>2022.&nbsp;07&emsp;&emsp;&emsp;&emsp;公立はこだて未来大学 竹川研究室 研究補助</li>
          <li className={styles.item}>2022.&nbsp;08&emsp;&emsp;&emsp;&emsp;ヤフー株式会社 インターンシップ（2週間）</li>
          <li className={styles.item}>2023.&nbsp;01&nbsp;&emsp;&emsp;&emsp;&emsp;株式会社タッケンシー アルバイト入社</li>
        </ul>
    </div>
  );
}
