export const getValueFromParams = (
  str: string,
  letterToCutFrom: string
): string => {
  return str.substring(str.indexOf(letterToCutFrom) + 1);
};

export const isValueValid = (value: string): boolean => {
  return value !== "";
};
