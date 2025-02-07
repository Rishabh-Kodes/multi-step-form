import Button from "../../components/button";
import Switch from "../../components/switch";
import { cn } from "../../utils/cn";
import { plans, steps } from "./constants";
import { useFormContext } from "./form.context";
import styles from "./form.module.scss";
import { getFormattedPrice } from "./form.utils";

const Plan = () => {
  const { formData, setCurrentStep, updateFormData } = useFormContext();
  const { plan: selectedPlan, planType } = formData;

  const handleNextStep = () => {
    setCurrentStep(steps[2].key);
  };

  const handleGoBack = () => {
    setCurrentStep(steps[0].key);
  };

  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["form-container__header"]}>
        <h1 className={styles["form-container__title"]}> Select your plan</h1>
        <p className={styles["form-container__description"]}>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className={styles["plans"]}>
        {plans.map((plan) => (
          <label key={plan.key} className={cn(styles["plans__card"])}>
            <input
              type="radio"
              name="plan"
              value={plan.key}
              className={styles["plans__card-input"]}
              checked={selectedPlan === plan.key}
              onChange={() => updateFormData("plan", plan.key)}
            />
            <div className={styles["plans__card-icon"]}>
              <img src={plan.icon} alt={plan.name} />
            </div>
            <div className={styles["plans__card-title"]}>{plan.name}</div>
            <div className={styles["plans__card-price"]}>
              {getFormattedPrice(plan.priceYearly, plan.priceMonthly, planType)}
            </div>
          </label>
        ))}
      </div>

      <div className={styles["plans-toggle"]}>
        <div className={styles["plans-toggle__text"]}>Monthly</div>
        <Switch
          checked={planType === "yearly"}
          onChange={(e) =>
            updateFormData("planType", e.target.checked ? "yearly" : "monthly")
          }
        />
        <div className={styles["plans-toggle__text"]}>Yearly</div>
      </div>

      <div className={styles["form-container__footer"]}>
        <Button variant="ghost" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button onClick={handleNextStep}>Next Step</Button>
      </div>
    </section>
  );
};

export default Plan;
