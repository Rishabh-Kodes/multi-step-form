import styles from "./form.module.scss";

const ThankYou = () => {
  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["thank-you"]}>
        <img
          src="/assets/images/icon-thank-you.svg"
          alt="Thank You"
          className={styles["thank-you__icon"]}
        />
        <h4 className={styles["thank-you__title"]}>Thank you!</h4>
        <p className={styles["thank-you__description"]}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
