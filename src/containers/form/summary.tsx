import Button from "../../components/button";
import styles from "./form.module.scss";

const Summary = () => {
  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["form-container__header"]}>
        <h1 className={styles["form-container__title"]}>Finishing up</h1>
        <p className={styles["form-container__description"]}>
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className={styles["summary"]}>
        <div className={styles["summary__header"]}>
          <div>
            <p className={styles["summary__header-title"]}>Arcade (Monthly)</p>
            <button className={styles["summary__header-button"]}>Change</button>
          </div>
          <p className={styles["summary__header-price"]}>$9/mo</p>
        </div>

        <div className={styles["summary__seperator"]} />

        <div className={styles["summary__item"]}>
          <p className={styles["summary__item-title"]}>Online service</p>
          <p className={styles["summary__item-price"]}>+$1/mo</p>
        </div>
        <div className={styles["summary__item"]}>
          <p className={styles["summary__item-title"]}>Larger storage</p>
          <p className={styles["summary__item-price"]}>+$2/mo</p>
        </div>
      </div>

      <div className={styles["summary-footer"]}>
        <p className={styles["summary-footer__title"]}>Total (per month)</p>
        <p className={styles["summary-footer__price"]}>$12/mo</p>
      </div>

      <div className={styles["form-container__footer"]}>
        <Button variant="ghost">Go Back</Button>
        <Button>Next Step</Button>
      </div>
    </section>
  );
};

export default Summary;
