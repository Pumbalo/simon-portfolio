import styles from "./experience_card.module.css";

function Experience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.card}>
          <h1>Lyreco</h1>
          <h5>Bankeryd - Warehouse Worker</h5>
          <hr></hr>
          <h1>Fagerhult</h1>
          <h5>Fagerhult - Warehouse Worker</h5>
          <hr></hr>
          <h1>UNGDRIVE</h1>
          <h5>Jönköping - Youth Company</h5>
          <hr></hr>
          <h1>INR</h1>
          <h5>Jönköping - Warehouse Worker</h5>
        </div>
      </div>
    </div>
  );
}

export default Experience;
