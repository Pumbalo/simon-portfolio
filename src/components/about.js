import styles from "./about.module.css";
import portrait from "./about_portrait.png";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content_container}>
          <img src={portrait} alt="Portrait" className={styles.portrait} />
          <div className={styles.card}>
            <p>
              My full name is Simon Sjöö, I'm 20 years old and was born in
              Jönköping, Sweden. I have had an interest in technology since I
              was about 5 years old, especially computers. I love spending time
              on my computer, with friends, and family, and watching hockey!
              <br />
              <br />I started getting interested in programming about 4 years
              ago, and have since then continued studying it. In high school, I
              studied system development where I got to learn HTML, CSS, Python,
              and C#, and a little bit of MySQL. I am currently studying Web
              Development .NET at Campus Värnamo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
