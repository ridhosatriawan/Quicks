function formatDate(inputDate) {
  const parts = inputDate.split("/");
  const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
  const formattedDate = dateObject.toISOString().slice(0, 10);
  return formattedDate;
}

export { formatDate };
