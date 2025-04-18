export function formatText(template, values, pluralRules = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    if (pluralRules[key]) {
      if (!values[key]) {
        return pluralRules[key].none;
      } else {
        return values[key] === 1
          ? pluralRules[key].one
          : pluralRules[key].other.replace("%d", values[key]);
      }
    }
    return values[key] ?? `{${key}}`; // Default to keeping the placeholder if missing
  });
}
