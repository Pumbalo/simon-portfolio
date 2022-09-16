import styles from "./hero.module.css";
import portrait from "./Portrait.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>
          Hi, <br />
          I'm Simon,
          <br />
          Web Developer
        </h1>
        <button className={styles.btn}>Contact Me</button>
      </div>
      <img src={portrait} alt="Portrait" className={styles.portrait} />
    </div>
  );
}

export default Hero;
