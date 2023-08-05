export function getTheme(): boolean {
  return (
    window.matchMedia &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function formatDate(
  seconds: number,
  format: ("day" | "month" | "year")[]
) {
  const date: Date = new Date(seconds);

  const output = {
    year: date.getFullYear(),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    day: String(date.getDate()).padStart(2, "0"),
  };

  return format.map((v) => output[v]).join("/");
}
