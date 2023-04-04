export function useTextWeight(textWeight) {
  switch (textWeight) {
    case "light":
      return " has-text-weight-light ";
    case "normal":
      return " has-text-weight-normal ";
    case "medium":
      return " has-text-weight-medium ";
    case "semibold":
      return " has-text-weight-semibold ";
    case "bold":
      return " has-text-weight-bold ";
    default:
      return "";
  }
}
