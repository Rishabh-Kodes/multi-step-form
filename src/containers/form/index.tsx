import Summary from "./summary";
import styles from "./form.module.scss";
import ThankYou from "./thank-you";

const MultiStepForm = () => {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <div className={styles["form-container"]}>
      <div className={styles["form-container__left-sidebar"]}>
        {steps.map((step, index) => (
          <div key={index} className={styles["sidebar-step"]}>
            <span className={styles["sidebar-step__number-badge"]}>
              {index + 1}
            </span>
            <span className={styles["sidebar-step__number-text"]}>
              Step {index + 1}
            </span>
            <span className={styles["sidebar-step__step-text"]}>{step}</span>
          </div>
        ))}
      </div>
      <div className={styles["form-container__right-content"]}>
        {/* <Info /> */}
        {/* <Plan /> */}
        {/* <AddOn /> */}
        {/* <Summary /> */}
        <ThankYou />
      </div>
    </div>
  );
};

export default MultiStepForm;
