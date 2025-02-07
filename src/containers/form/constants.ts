export const steps = [
  { key: "your-info", title: "Your info" },
  { key: "select-plan", title: "Select plan" },
  { key: "add-ons", title: "Add-ons" },
  { key: "summary", title: "Summary" },
];

export const plans = [
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

export const addOns = [
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
