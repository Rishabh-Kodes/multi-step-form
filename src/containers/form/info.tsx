import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./form.module.scss";

const Info = () => {
  return (
    <section className={styles["form-container__right-content-container"]}>
      <div className={styles["form-container__header"]}>
        <h1 className={styles["form-container__title"]}>Personal info</h1>
        <p className={styles["form-container__description"]}>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className={styles["form-container__inputs-container"]}>
        <Input label="Name" name="name" placeholder="e.g. Stephen King" />
        <Input
          label="Email Address"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          label="Phone Number"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          errorText="This field is required"
        />
      </div>

      <div className={styles["form-container__footer"]}>
        <Button>Next Step</Button>
      </div>
    </section>
  );
};

export default Info;
