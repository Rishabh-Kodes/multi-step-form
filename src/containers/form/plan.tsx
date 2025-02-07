import Button from "../../components/button";
import Switch from "../../components/switch";
import { cn } from "../../utils/cn";
import styles from "./form.module.scss";

const Plan = () => {
  const plans = [
    {
      key: "arcade",
      icon: "/assets/images/icon-arcade.svg",
      name: "Arcade",
      priceMonthly: 9,
      priceYearly: 9 * 10,
    },
    {
      key: "advanced",
      icon: "/assets/images/icon-advanced.svg",
      name: "Advanced",
      priceMonthly: 12,
      priceYearly: 12 * 10,
    },
    {
      key: "pro",
      icon: "/assets/images/icon-pro.svg",
      name: "Pro",
      priceMonthly: 15,
      priceYearly: 15 * 10,
    },
  ];

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
            />
            <div className={styles["plans__card-icon"]}>
              <img src={plan.icon} alt={plan.name} />
            </div>
            <div className={styles["plans__card-title"]}>{plan.name}</div>
            <div className={styles["plans__card-price"]}>
              ${plan.priceMonthly}/mo
            </div>
          </label>
        ))}
      </div>

      <div className={styles["plans-toggle"]}>
        <div className={styles["plans-toggle__text"]}>Monthly</div>
        <Switch />
        <div className={styles["plans-toggle__text"]}>Yearly</div>
      </div>

      <div className={styles["form-container__footer"]}>
        <Button variant="ghost">Go Back</Button>
        <Button>Next Step</Button>
      </div>
    </section>
  );
};

export default Plan;
