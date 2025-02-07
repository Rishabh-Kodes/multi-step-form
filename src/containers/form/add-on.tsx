import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import { addOns, steps } from "./constants";
import { useFormContext } from "./form.context";
import styles from "./form.module.scss";
import { getFormattedPrice } from "./form.utils";

const AddOn = () => {
  const { formData, setCurrentStep, updateFormData } = useFormContext();
  const { addOns: selectedAddOns, planType } = formData;

  const handleNextStep = () => {
    setCurrentStep(steps[3].key);
  };

  const handleGoBack = () => {
    setCurrentStep(steps[1].key);
  };

  const handleAddOnChange = (addOnKey: string) => {
    const newAddOns = selectedAddOns.includes(addOnKey)
      ? selectedAddOns.filter((key) => key !== addOnKey)
      : [...selectedAddOns, addOnKey];
    updateFormData("addOns", newAddOns);
  };

  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["form-container__header"]}>
        <h1 className={styles["form-container__title"]}>Pick add-ons</h1>
        <p className={styles["form-container__description"]}>
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className={styles["add-ons"]}>
        {addOns.map((addOn) => (
          <label className={styles["add-ons__card"]} key={addOn.key}>
            <Checkbox
              checked={selectedAddOns.includes(addOn.key)}
              onChange={() => handleAddOnChange(addOn.key)}
            />
            <div>
              <div className={styles["add-ons__card-title"]}>{addOn.name}</div>
              <div className={styles["add-ons__card-description"]}>
                {addOn.description}
              </div>
            </div>
            <div className={styles["add-ons__card-price"]}>
              {getFormattedPrice(
                addOn.priceYearly,
                addOn.priceMonthly,
                planType
              )}
            </div>
          </label>
        ))}
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

export default AddOn;
