import { createContext, ReactNode, useContext, useState } from "react";
import { steps } from "./constants";

export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planType: "monthly" | "yearly";
  addOns: string[];
};

type FormContextType = {
  currentStep: string;
  formData: FormDataType;
  setCurrentStep: (step: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  updateFormData: <K extends keyof FormDataType>(
    key: K,
    value: FormDataType[K]
  ) => void;
  isFormSubmitted: boolean;
  setIsFormSubmitted: (isFormSubmitted: boolean) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(steps[0].key);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    planType: "yearly",
    addOns: [],
  });

  const updateFormData = <K extends keyof FormDataType>(
    key: K,
    value: FormDataType[K]
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        setCurrentStep,
        setFormData,
        updateFormData,
        isFormSubmitted,
        setIsFormSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
