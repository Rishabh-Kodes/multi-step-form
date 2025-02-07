import { cn } from "../../utils/cn";
import AddOn from "./add-on";
import { steps } from "./constants";
import { useFormContext } from "./form.context";
import styles from "./form.module.scss";
import Info from "./info";
import Plan from "./plan";
import Summary from "./summary";
import ThankYou from "./thank-you";

const MultiStepForm = () => {
  const { isFormSubmitted, currentStep } = useFormContext();

  return (
    <div className={styles["form-container"]}>
      <div className={styles["form-container__left-sidebar"]}>
        {steps.map(({ key, title }, index) => (
          <div key={key} className={styles["sidebar-step"]}>
            <span
              className={cn(
                styles["sidebar-step__number-badge"],
                currentStep === key
                  ? styles["sidebar-step__number-badge--active"]
                  : ""
              )}
            >
              {index + 1}
            </span>
            <span className={styles["sidebar-step__number-text"]}>
              Step {index + 1}
            </span>
            <span className={styles["sidebar-step__step-text"]}>{title}</span>
          </div>
        ))}
      </div>
      <div className={styles["form-container__right-content"]}>
        {isFormSubmitted ? (
          <ThankYou />
        ) : (
          <>
            {currentStep === steps[0].key && <Info />}
            {currentStep === steps[1].key && <Plan />}
            {currentStep === steps[2].key && <AddOn />}
            {currentStep === steps[3].key && <Summary />}
          </>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
