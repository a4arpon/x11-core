export function formatMongoDate(mongoDate) {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(mongoDate)
  )

  return formattedDate
}


export const slugGenerator = (text) => {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-");

  return slug;
};