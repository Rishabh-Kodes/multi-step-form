import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { steps } from "./constants";
import { FormDataType, useFormContext } from "./form.context";
import { validateFormData } from "./form.utils";

import styles from "./form.module.scss";

const Info = () => {
  const [error, setError] = useState<Partial<FormDataType>>({});
  const { setCurrentStep, formData, updateFormData } = useFormContext();
  const { name, email, phone } = formData;

  const handleNextStep = () => {
    const validation = validateFormData(formData);
    if (validation.isValid) {
      setCurrentStep(steps[1].key);
    } else {
      setError(validation.errorMessages);
    }
  };

  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["form-container__header"]}>
        <h1 className={styles["form-container__title"]}>Personal info</h1>
        <p className={styles["form-container__description"]}>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className={styles["form-container__inputs-container"]}>
        <Input
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => updateFormData("name", e.target.value)}
          errorText={error.name}
        />
        <Input
          label="Email Address"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => updateFormData("email", e.target.value)}
          errorText={error.email}
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          errorText={error.phone}
        />
      </div>

      <div className={styles["form-container__footer"]}>
        <span />
        <Button onClick={handleNextStep}>Next Step</Button>
      </div>
    </section>
  );
};

export default Info;
