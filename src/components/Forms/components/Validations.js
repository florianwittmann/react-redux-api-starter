export const isRequired = item => {
  return !item ? "This is required." : null;
};

export const isEmail = item => {
  return item && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(item)
    ? "Invalid email."
    : null;
};

export const minLength = minLength => item => {
  return !item || item.length < minLength
    ? `Needs at minimum of ${minLength} characters.`
    : null;
};

export const maxLength = maxLength => item => {
  return item.length > maxLength
    ? `Uses more than the maximum of ${maxLength} characters.`
    : null;
};

export const matches = fieldName => (item, values) => {
  return item !== values[fieldName] ? `Won't match!` : null;
};

export const validate = (values, ruleSet) => {
  const errors = {};
  Object.keys(ruleSet).forEach(fieldName => {
    const rules = ruleSet[fieldName];
    rules.reverse().forEach(rule => {
      const error = rule(values[fieldName], values);
      if (error) {
        errors[fieldName] = error;
      }
    });
  });
  return errors;
};
