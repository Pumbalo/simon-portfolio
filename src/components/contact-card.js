import styles from "./contact-card.module.css";

function ContactCard() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h1 className={styles.title}>Contact Me</h1>
            <h4 className={styles.sub_title}>+46 70-482 66 56</h4>
            <h4 className={styles.sub_title}>simon.sjoo21@gmail.com</h4>
            <div className={styles.cirlce_big}></div>
            <div className={styles.cirlce_small}></div>
          </div>
          <div className={styles.right}>
            <form onSubmit={handleSubmit} className={styles.form_wrapper}>
              <label>
                First Name <span className={styles.required}>*</span>
                <input
                  className={styles.input_box}
                  type="text"
                  name="firstName"
                />
              </label>
              <label>
                Last Name <span className={styles.required}>*</span>
                <input
                  className={styles.input_box}
                  type="text"
                  name="lastName"
                />
              </label>
              <label>
                Email <span className={styles.required}>*</span>
                <input className={styles.input_box} type="email" name="email" />
              </label>
              <label>
                Repeat Email <span className={styles.required}>*</span>
                <input
                  className={styles.input_box}
                  type="email"
                  name="repeatEmail"
                />
              </label>
              <label>
                Telephone
                <input
                  className={styles.input_box}
                  type="number"
                  name="telephone"
                />
              </label>
              <label>
                Subject <span className={styles.required}>*</span>
                <input
                  className={styles.input_box}
                  type="text"
                  name="subject"
                />
              </label>
              <label>
                Message <span className={styles.required}>*</span>
                <input
                  className={styles.input_box}
                  type="text"
                  name="message"
                />
              </label>

              <input className={styles.btn} type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
