import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/index.module.css";
import Link from "next/link";
import About from "@/components/about";
import Work from "@/components/work";
import Contact from "@/components/contact";

import profile from "@/../public/profile.jpg";
import { useState } from "react";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [workIsActive, setWorkIsActive] = useState(false);
  const [contactIsActive, setContactIsActive] = useState(false);

  const handleAboutActive = () => {
    setAboutIsActive(!aboutIsActive);
  }
  const handleWorkActive = () => {
    setWorkIsActive(!workIsActive);
  }
  const handleContactActive = () => {
    setContactIsActive(!contactIsActive);
  }


  return (
    <>
      <main className={styles.main}>
        <div className={styles.bg}>
          <video
            width="320"
            height="240"
            autoplay=""
            loop
            muted
            className={styles.bgVideo}
          >
            <source
              src="https://assets.codepen.io/3364143/7btrrd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.home}>
          <div className={styles.contents}>
            <div className={styles.leftCol}>
              <div className={styles.profile}>
                <div className={styles.profileImg_base}>
                  <div className={styles.profileImg}>
                    <Image src={profile} layout="fill" objectFit="contain" />
                  </div>
                </div>
                <p className={styles.profileName}>Muto Sota</p>
              </div>
            </div>

            <div className={styles.rightCol}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href="#" className={styles.link} onClick={handleAboutActive}>
                    About
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="#" className={styles.link} onClick={handleWorkActive}>
                    Work
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href="#" className={styles.link} onClick={handleContactActive}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <About isActive={aboutIsActive} handleActive={handleAboutActive} />
        <Work isActive={workIsActive} handleActive={handleWorkActive} />
        <Contact isActive={contactIsActive} handleActive={handleContactActive} />
      </main>
    </>
  );
}
