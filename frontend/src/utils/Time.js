export function extractTime(dateString) {
  const date = new Date(dateString).toLocaleString("en-US", { hour12: true });
  const sec = date.slice(12);
  const min = sec.slice(0, 5);
  const PM = sec.split(" ")[1];

  const time = `${min} ${PM}`;

  return time;
}
