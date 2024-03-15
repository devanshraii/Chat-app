export function extractTime(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedDate;
}
