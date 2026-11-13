export const get = async () => {

  const response = await fetch("https://upgraded-giggle-j4pp7x4rjr6cg64-3000.app.github.dev/invoices");
  
  return response.json();

};