export const isRequired = item => {
  return !item ? "Bitte füllen Sie das Feld aus." : null;
};

export const isEmail = item => {
  return item && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(item)
    ? "Ungültige Emailadresse."
    : null;
};

export const minLength = minLength => item => {
  return !item || item.length < minLength
    ? `Bitte geben Sie mindestens ${minLength} Zeichen ein.`
    : null;
};

export const maxLength = maxLength => item => {
  return item.length > maxLength
    ? `Bitte geben Sie maximal ${maxLength} Zeichen ein.`
    : null;
};

export const matches = fieldName => (item, values) => {
  return item !== values[fieldName] ? `Keine Übereinstimmung!` : null;
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
