import { useMemo } from "react";
import Button from "../../components/button";
import { addOns as addOnsList, plans, steps } from "./constants";
import { useFormContext } from "./form.context";
import styles from "./form.module.scss";
import { getFormattedPrice } from "./form.utils";

const Summary = () => {
  const { setCurrentStep, setIsFormSubmitted, formData } = useFormContext();
  const { plan, addOns, planType } = formData;

  const handleGoBack = () => {
    setCurrentStep(steps[2].key);
  };

  const handleConfirm = () => {
    setIsFormSubmitted(true);
  };

  const selectedPlan = useMemo(() => {
    return plans.find((_plan) => _plan.key === plan);
  }, [plan]);

  const selectedAddOns = useMemo(() => {
    return addOnsList.filter((_addOn) => addOns.includes(_addOn.key));
  }, [addOns]);

  const totalPrice = useMemo(() => {
    const addonPrice = selectedAddOns.reduce((total, addOn) => {
      return (
        total + (planType === "yearly" ? addOn.priceYearly : addOn.priceMonthly)
      );
    }, 0);
    const planPrice =
      planType === "yearly"
        ? selectedPlan?.priceYearly
        : selectedPlan?.priceMonthly;
    return addonPrice + planPrice!;
  }, [selectedAddOns, planType, selectedPlan]);

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
            <p className={styles["summary__header-title"]}>
              {selectedPlan?.name} (
              {planType === "yearly" ? "Yearly" : "Monthly"})
            </p>
            <button
              className={styles["summary__header-button"]}
              onClick={() => setCurrentStep(steps[1].key)}
            >
              Change
            </button>
          </div>
          <p className={styles["summary__header-price"]}>
            {getFormattedPrice(
              selectedPlan?.priceYearly ?? 0,
              selectedPlan?.priceMonthly ?? 0,
              planType
            )}
          </p>
        </div>

        {selectedAddOns?.length > 0 && (
          <div className={styles["summary__seperator"]} />
        )}

        {selectedAddOns.map((addOn) => (
          <div className={styles["summary__item"]}>
            <p className={styles["summary__item-title"]}>{addOn.name}</p>
            <p className={styles["summary__item-price"]}>
              +
              {getFormattedPrice(
                addOn.priceYearly,
                addOn.priceMonthly,
                planType
              )}
            </p>
          </div>
        ))}
      </div>

      <div className={styles["summary-footer"]}>
        <p className={styles["summary-footer__title"]}>
          Total (per {planType === "yearly" ? "year" : "month"})
        </p>
        <p className={styles["summary-footer__price"]}>
          {getFormattedPrice(totalPrice, totalPrice, planType)}
        </p>
      </div>

      <div className={styles["form-container__footer"]}>
        <Button variant="ghost" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </div>
    </section>
  );
};

export default Summary;
