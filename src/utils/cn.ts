export const cn = (...classnames: (string | undefined)[]): string => {
  return classnames.filter(Boolean).join(" ");
};
