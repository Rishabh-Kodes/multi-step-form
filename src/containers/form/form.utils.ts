import { FormDataType } from "./form.context";

type ValidationResult = {
  isValid: boolean;
  errorMessage: string;
};

export const validateName = (name: string): ValidationResult => {
  if (!name) {
    return {
      isValid: false,
      errorMessage: "Name is required",
    };
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return {
      isValid: false,
      errorMessage: "Enter a valid name",
    };
  }
  return { isValid: true, errorMessage: "" };
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return {
      isValid: false,
      errorMessage: "Email is required",
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      errorMessage: "Enter a valid email address",
    };
  }
  return { isValid: true, errorMessage: "" };
};

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone) {
    return {
      isValid: false,
      errorMessage: "Phone number is required",
    };
  }
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone)) {
    return {
      isValid: false,
      errorMessage: "Enter a valid phone number",
    };
  }
  return { isValid: true, errorMessage: "" };
};

export const validateFormData = (formData: FormDataType) => {
  const errorMessages: { name?: string; email?: string; phone?: string } = {};

  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) errorMessages.name = nameValidation.errorMessage;

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid)
    errorMessages.email = emailValidation.errorMessage;

  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid)
    errorMessages.phone = phoneValidation.errorMessage;

  return { isValid: Object.keys(errorMessages).length === 0, errorMessages };
};

export const getFormattedPrice = (
  yearlyPrice: number,
  monthlyPrice: number,
  planType: string
) => {
  return `$${planType === "yearly" ? yearlyPrice : monthlyPrice}/${
    planType === "yearly" ? "yr" : "mo"
  }`;
};
