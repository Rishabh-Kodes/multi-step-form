import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import styles from "./form.module.scss";

const AddOn = () => {
  const addOns = [
    {
      key: "online-service",
      name: "Online service",
      description: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
    },
    {
      key: "larger-storage",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
    },
    {
      key: "customizable-profile",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
    },
  ];

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
            <Checkbox />
            <div>
              <div className={styles["add-ons__card-title"]}>{addOn.name}</div>
              <div className={styles["add-ons__card-description"]}>
                {addOn.description}
              </div>
            </div>
            <div className={styles["add-ons__card-price"]}>
              {`+$${addOn.priceMonthly}/mo`}
            </div>
          </label>
        ))}
      </div>

      <div className={styles["form-container__footer"]}>
        <Button variant="ghost">Go Back</Button>
        <Button>Next Step</Button>
      </div>
    </section>
  );
};

export default AddOn;
