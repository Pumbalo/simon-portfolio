import styles from "./project.module.css";

function Project() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.grid}>
          <a href="https://pumbalo.github.io/uppgift1_html/" target="_blank">
            <div className={styles.item}>Trädgårdar Övningsuppgift 1</div>
          </a>
          <div className={styles.item}>No Projects Yet...</div>
          <div className={styles.item}>No Projects Yet...</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
